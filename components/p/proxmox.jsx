import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqsa_mblk.css';
import '../../css/c/cx1y_wb5f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqsa_mblk"/><path class="cx1y_wb5f"/>`,
		"fallback": "devicon:proxmox",
	});
}

export default Component;
