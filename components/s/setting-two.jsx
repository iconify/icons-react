import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dnob__wjw.css';
import '../../css/g/g0sf6ebkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dnob__wjw"/><path class="g0sf6ebkt"/></g>`,
		"fallback": "icon-park-outline:setting-two",
	});
}

export default Component;
