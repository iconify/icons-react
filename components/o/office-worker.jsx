import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/php117btp.css';
import '../../css/m/mlez1ebwz.css';
import '../../css/i/i95o0obpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="php117btp"/><path class="mlez1ebwz"/><path class="i95o0obpn"/></g>`,
		"fallback": "streamline-sharp-color:office-worker",
	});
}

export default Component;
