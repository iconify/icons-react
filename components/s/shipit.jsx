import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq7dhvbqx.css';
import '../../css/p/pf1wtprxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq7dhvbqx"/><path class="pf1wtprxb"/>`,
		"fallback": "file-icons:shipit",
	});
}

export default Component;
