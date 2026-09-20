import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8o37xbsi.css';
import '../../css/o/ozhrcvezr.css';
import '../../css/n/nxg4h0b8x.css';
import '../../css/s/spa_47bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8o37xbsi"/><path class="ozhrcvezr"/><path class="nxg4h0b8x"/><path class="spa_47bei"/>`,
		"fallback": "token:maticx",
	});
}

export default Component;
