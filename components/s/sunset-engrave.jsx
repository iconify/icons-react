import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k4qkxi46l.css';
import '../../css/i/i8n8d4bmd.css';
import '../../css/l/lyqxg0dtp.css';
import '../../css/d/d7jwdev0a.css';
import '../../css/s/sxdzfouvy.css';
import '../../css/z/z43mx6bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="k4qkxi46l wm-k"/><path class="i8n8d4bmd wm-s"/><path class="lyqxg0dtp wm-shadow"/><path class="d7jwdev0a wm-k"/><path class="sxdzfouvy wm-a"/><path class="wm-s z43mx6bwb"/></g>`,
		"fallback": "withicons:sunset-engrave",
	});
}

export default Component;
