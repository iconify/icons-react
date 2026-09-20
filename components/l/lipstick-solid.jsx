import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ampt1vbjb.css';
import '../../css/j/j9x2719of.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ampt1vbjb"/><path class="j9x2719of"/>`,
		"fallback": "streamline-plump:lipstick-solid",
	});
}

export default Component;
