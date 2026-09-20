import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lh8ihccyf.css';
import '../../css/l/l-_am0b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="lh8ihccyf"/><path vector-effect="non-scaling-stroke" class="l-_am0b3h"/></g>`,
		"fallback": "wordpress:skip-back",
	});
}

export default Component;
