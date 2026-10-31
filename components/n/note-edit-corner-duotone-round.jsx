import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmefvvbjb.css';
import '../../css/e/erapcrzso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmefvvbjb"/><path class="erapcrzso"/></g>`,
		"fallback": "coolicons:note-edit-corner-duotone-round",
	});
}

export default Component;
