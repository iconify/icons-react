import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aje1gjofx.css';
import '../../css/x/xur4k61po.css';
import '../../css/w/wtc6rtblh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aje1gjofx"/><path class="xur4k61po"/><path class="wtc6rtblh"/>`,
		"fallback": "ion:server",
	});
}

export default Component;
