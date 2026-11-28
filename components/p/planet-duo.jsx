import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpdgzbbxg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fth_5tbmd.css';
import '../../css/x/xqquot5tz.css';
import '../../css/f/f845xlleg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpdgzbbxg secondary"/><g class="dt0cm9dhy primary"><path class="fth_5tbmd"/><path class="xqquot5tz"/><path class="f845xlleg"/></g>`,
		"fallback": "iconaut:planet-duo",
	});
}

export default Component;
