import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdc3ghf8g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h1ma72bft.css';
import '../../css/l/llr9rqbjq.css';
import '../../css/d/dq60wlbxs.css';
import '../../css/b/b9him6jfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tdc3ghf8g"/><g class="dt0cm9dhy primary"><path class="h1ma72bft"/><path class="llr9rqbjq"/><path class="dq60wlbxs"/><path class="b9him6jfk"/></g>`,
		"fallback": "iconaut:mail-cog-duo",
	});
}

export default Component;
