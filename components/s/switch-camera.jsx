import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/d/dlobgsgng.css';
import '../../css/d/dci9fo9uz.css';
import '../../css/l/luioiwb9e.css';
import '../../css/i/ifpgqacxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGZKFl8qTw" x1="9" x2="15" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGZKFl8qTw)" class="dlobgsgng"/><path class="dci9fo9uz wm-shine"/><path class="luioiwb9e wm-shine"/><path class="ifpgqacxf wm-shine"/></g>`,
		"fallback": "withicons-utsav:switch-camera",
	});
}

export default Component;
