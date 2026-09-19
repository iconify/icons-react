import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mle__jblb.css';
import '../../css/t/tmdrprbwx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mle__jblb"/><path class="tmdrprbwx"/></g>`,
		"fallback": "icon-park-solid:tower-of-babel",
	});
}

export default Component;
