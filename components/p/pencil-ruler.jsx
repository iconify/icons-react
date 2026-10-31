import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/v/v4l7cr77l.css';
import '../../css/k/kr4tcpbpm.css';
import '../../css/v/v8tlmbcpj.css';
import '../../css/h/hcql2tmtj.css';
import '../../css/g/gyytzlc5m.css';
import '../../css/e/e5i7mkqjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGxJQqTdsO" cx="7.64" cy="14.04" r="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="v4l7cr77l wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="kr4tcpbpm wm-a"/><path fill="url(#SVGxJQqTdsO)" class="v8tlmbcpj wm-k"/><path class="hcql2tmtj wm-shine"/><path class="gyytzlc5m wm-deco"/><path class="e5i7mkqjg wm-deco"/></g>`,
		"fallback": "withicons-rangoli:pencil-ruler",
	});
}

export default Component;
