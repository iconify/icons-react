import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/evd_71_lh.css';
import '../../css/m/m5fdejb6n.css';
import '../../css/l/llg19mb4p.css';
import '../../css/w/w04hp7_0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyS53PGOI" x1="9" x2="15" y1="1.01" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyS53PGOI)" class="evd_71_lh"/><path class="m5fdejb6n wm-shine"/><path class="llg19mb4p wm-shine"/><path class="w04hp7_0c wm-shine"/></g>`,
		"fallback": "withicons-utsav:speaker",
	});
}

export default Component;
