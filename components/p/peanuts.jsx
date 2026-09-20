import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/n/ntb7ocbur.css';
import '../../css/d/dxgettuwf.css';
import '../../css/y/ykr7lgjqh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="ntb7ocbur"/><path class="dxgettuwf"/></g><path class="ykr7lgjqh"/>`,
		"fallback": "openmoji:peanuts",
	});
}

export default Component;
