import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti114kbus.css';
import '../../css/k/kb_qqiuxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ti114kbus"/><path class="kb_qqiuxb"/></g>`,
		"fallback": "streamline-ultimate-color:keyboard-asterisk-3",
	});
}

export default Component;
