import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hij-t_s7i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wrqy68b6c.css';
import '../../css/p/ptb9_xbpm.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hij-t_s7i secondary"/><g class="dt0cm9dhy primary"><path class="wrqy68b6c"/><path class="ptb9_xbpm"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:video-off-duo",
	});
}

export default Component;
