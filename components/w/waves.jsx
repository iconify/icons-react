import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tasj6fszi.css';
import '../../css/m/mvdztivko.css';
import '../../css/n/n0azeg45d.css';
import '../../css/y/yujhfmaig.css';
import '../../css/m/mwstojo0d.css';
import '../../css/q/qkm1unb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tasj6fszi wm-shadow"/><path class="mvdztivko"/><path class="n0azeg45d"/><path class="yujhfmaig"/><path class="mwstojo0d wm-shine"/><path class="qkm1unb_m wm-deco"/></g>`,
		"fallback": "withicons-sticker:waves",
	});
}

export default Component;
