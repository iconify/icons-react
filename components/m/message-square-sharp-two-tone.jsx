import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cqom7uzef.css';
import '../../css/m/me5ma3bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cqom7uzef"/><path class="me5ma3bgj"/></g>`,
		"fallback": "keyline-icons:message-square-sharp-two-tone",
	});
}

export default Component;
