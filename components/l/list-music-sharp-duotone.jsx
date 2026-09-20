import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/voakxho5e.css';
import '../../css/t/tg0xmb4fk.css';
import '../../css/c/cna37lbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="voakxho5e"/><path class="tg0xmb4fk"/><path class="cna37lbtr"/></g>`,
		"fallback": "keyline-icons:list-music-sharp-duotone",
	});
}

export default Component;
