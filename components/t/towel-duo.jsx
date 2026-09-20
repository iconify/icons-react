import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/f/fcmg1cbyd.css';
import '../../css/q/qq94dqkiv.css';
import '../../css/f/f-c_6tbpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="fcmg1cbyd"/><path class="qq94dqkiv"/><path class="f-c_6tbpc"/></g>`,
		"fallback": "streamline-kameleon-color:towel-duo",
	});
}

export default Component;
