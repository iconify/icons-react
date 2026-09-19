import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajxmsggbu.css';
import '../../css/f/fu8kw1lgs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ajxmsggbu"/><path class="fu8kw1lgs"/></g>`,
		"fallback": "cryptocurrency-color:oax",
	});
}

export default Component;
