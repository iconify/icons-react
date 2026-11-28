import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="wrqy68b6c"/><path class="ptb9_xbpm"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:video-off",
	});
}

export default Component;
