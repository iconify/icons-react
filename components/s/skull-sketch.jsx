import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/ftjlt04ey.css';
import '../../css/i/inirm0b4k.css';
import '../../css/p/poqevy83a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ftjlt04ey"/><path class="inirm0b4k wm-k"/><path class="poqevy83a wm-a"/></g>`,
		"fallback": "withicons:skull-sketch",
	});
}

export default Component;
