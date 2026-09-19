import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wduvy1bau.css';
import '../../css/y/yqkq0p36x.css';
import '../../css/i/i4wkegb-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wduvy1bau"/><path class="yqkq0p36x"/><path class="i4wkegb-l"/></g>`,
		"fallback": "icon-park-outline:mail",
	});
}

export default Component;
