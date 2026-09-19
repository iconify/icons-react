import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wb3edia6h.css';
import '../../css/g/gsaz2lbqg.css';
import '../../css/w/w0tt369dj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wb3edia6h"/><path class="gsaz2lbqg"/><path class="w0tt369dj"/></g>`,
		"fallback": "icon-park-solid:rotate",
	});
}

export default Component;
