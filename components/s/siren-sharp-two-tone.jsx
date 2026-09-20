import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ikxifqblw.css';
import '../../css/x/xoltr9kvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ikxifqblw"/><path class="xoltr9kvq"/></g>`,
		"fallback": "keyline-icons:siren-sharp-two-tone",
	});
}

export default Component;
