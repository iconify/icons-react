import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5lpo-xrj.css';
import '../../css/f/f-6abtb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="w5lpo-xrj"/><path class="f-6abtb_f"/></g>`,
		"fallback": "iconamoon:settings-thin",
	});
}

export default Component;
