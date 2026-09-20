import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hgo4xbbla.css';
import '../../css/y/y2rw57byo.css';
import '../../css/d/dsak2k1zd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="hgo4xbbla"/><path class="y2rw57byo"/><path class="dsak2k1zd"/></g>`,
		"fallback": "streamline-plump:memes-comment-reply",
	});
}

export default Component;
