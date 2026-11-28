import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytpv6xbqz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qe6jzbblt.css';
import '../../css/n/n_jezs_eb.css';
import '../../css/x/xgwmkha6u.css';
import '../../css/r/ruvx9wuvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ytpv6xbqz"/><g class="dt0cm9dhy primary"><path class="qe6jzbblt"/><path class="n_jezs_eb"/><path class="xgwmkha6u"/><path class="ruvx9wuvp"/></g>`,
		"fallback": "iconaut:plug-zap-duo",
	});
}

export default Component;
