import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r4qj22bpz.css';
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
		"content": `<g class="casyzt9mq"><path class="r4qj22bpz"/><path class="gsaz2lbqg"/><path class="w0tt369dj"/></g>`,
		"fallback": "icon-park-outline:rotate",
	});
}

export default Component;
