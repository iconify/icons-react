import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2a21upip.css';
import '../../css/z/z8nmbef_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="f2a21upip"/><path class="z8nmbef_t"/></g>`,
		"fallback": "cryptocurrency-color:req",
	});
}

export default Component;
