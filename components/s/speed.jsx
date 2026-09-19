import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mm0oaabax.css';
import '../../css/b/beraasbar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mm0oaabax"/><path class="beraasbar"/></g>`,
		"fallback": "icon-park-outline:speed",
	});
}

export default Component;
