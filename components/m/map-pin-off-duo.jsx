import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0r16e4cs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wp1q2ntpc.css';
import '../../css/y/yylyrccfn.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0r16e4cs secondary"/><g class="dt0cm9dhy primary"><path class="wp1q2ntpc"/><path class="yylyrccfn"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:map-pin-off-duo",
	});
}

export default Component;
