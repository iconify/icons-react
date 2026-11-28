import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5f2ctbca.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xgnraixwd.css';
import '../../css/j/jsdifkdbk.css';
import '../../css/l/lub1h9ltp.css';
import '../../css/s/skjtdwb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5f2ctbca secondary"/><g class="dt0cm9dhy primary"><path class="xgnraixwd"/><path class="jsdifkdbk"/><path class="lub1h9ltp"/><path class="skjtdwb1m"/></g>`,
		"fallback": "iconaut:log-duo",
	});
}

export default Component;
