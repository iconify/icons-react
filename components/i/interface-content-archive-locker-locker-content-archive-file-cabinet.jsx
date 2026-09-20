import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/knrhvtpcp.css';
import '../../css/l/lx7o3bc4d.css';
import '../../css/i/i5sj4ifpi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="knrhvtpcp"/><circle class="lx7o3bc4d"/><circle class="i5sj4ifpi"/></g>`,
		"fallback": "streamline:interface-content-archive-locker-locker-content-archive-file-cabinet",
	});
}

export default Component;
