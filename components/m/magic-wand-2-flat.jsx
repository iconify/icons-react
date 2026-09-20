import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee1uwmbvy.css';
import '../../css/i/ie1l0uuab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ee1uwmbvy"/><path class="ie1l0uuab"/></g>`,
		"fallback": "streamline-color:magic-wand-2-flat",
	});
}

export default Component;
