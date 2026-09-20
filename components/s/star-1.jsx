import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp77_ab0m.css';
import '../../css/y/ymsisybrg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp77_ab0m"/><path class="ymsisybrg"/></g>`,
		"fallback": "streamline-color:star-1",
	});
}

export default Component;
