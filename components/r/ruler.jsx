import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/casewv70p.css';
import '../../css/w/wprssnirt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="casewv70p"/><path class="wprssnirt"/></g>`,
		"fallback": "tdesign:ruler",
	});
}

export default Component;
