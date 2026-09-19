import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kue-_9i_s.css';
import '../../css/w/wm0qy2b2m.css';
import '../../css/p/p91j9gb3y.css';
import '../../css/b/bl5dnqrrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kue-_9i_s"/><path class="wm0qy2b2m"/><path class="p91j9gb3y"/><path class="bl5dnqrrh"/>`,
		"fallback": "fxemoji:outbox",
	});
}

export default Component;
