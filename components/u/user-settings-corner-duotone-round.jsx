import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqzlugbkx.css';
import '../../css/g/g7zo9osnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqzlugbkx"/><path class="g7zo9osnt"/></g>`,
		"fallback": "coolicons:user-settings-corner-duotone-round",
	});
}

export default Component;
