import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwv72-otp.css';
import '../../css/b/bxmmgkbip.css';
import '../../css/v/v5p2wk7yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwv72-otp"/><path class="bxmmgkbip"/><path class="v5p2wk7yq"/></g>`,
		"fallback": "tdesign:system-regulation",
	});
}

export default Component;
