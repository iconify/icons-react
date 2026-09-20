import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvp117b0n.css';
import '../../css/a/aatpn0b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvp117b0n"/><path class="aatpn0b2c"/></g>`,
		"fallback": "tdesign:task-location",
	});
}

export default Component;
