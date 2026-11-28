import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prbjzkbzo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/x/xij9k1b5m.css';
import '../../css/c/ck0u8-bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prbjzkbzo secondary"/><g class="dt0cm9dhy primary"><path class="uuw1qkbsv"/><path class="xij9k1b5m"/><path class="ck0u8-bhu"/></g>`,
		"fallback": "iconaut:monitor-play-duo",
	});
}

export default Component;
