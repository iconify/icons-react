import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/ehq94ab3m.css';
import '../../css/u/umxxymqhr.css';
import '../../css/u/uanaekbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ehq94ab3m"/><path class="umxxymqhr"/><path class="uanaekbsb"/></g>`,
		"fallback": "icon-park-solid:toolkit",
	});
}

export default Component;
