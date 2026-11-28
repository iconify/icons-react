import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phm30sbfb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xhu828bgh.css';
import '../../css/m/mz1560bnj.css';
import '../../css/i/ixbwkv4mz.css';
import '../../css/w/wk9de4znk.css';
import '../../css/u/ur3_tunjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phm30sbfb secondary"/><g class="dt0cm9dhy primary"><path class="xhu828bgh"/><path class="mz1560bnj"/><path class="ixbwkv4mz"/><path class="wk9de4znk"/><path class="ur3_tunjd"/></g>`,
		"fallback": "iconaut:steam-train-duo",
	});
}

export default Component;
