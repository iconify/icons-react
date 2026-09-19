import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbsg529cw.css';
import '../../css/s/sto-m6bio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbsg529cw"/><path class="sto-m6bio"/>`,
		"fallback": "formkit:month",
	});
}

export default Component;
