import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ys6tbkblj.css';
import '../../css/k/k76fe_bot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ys6tbkblj"/><path class="k76fe_bot"/></g>`,
		"fallback": "icon-park-outline:send-one",
	});
}

export default Component;
