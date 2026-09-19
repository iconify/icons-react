import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xp3b1xdon.css';
import '../../css/f/fruahub8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xp3b1xdon"/><path class="fruahub8w"/></g>`,
		"fallback": "icon-park-outline:thunderstorm-one",
	});
}

export default Component;
