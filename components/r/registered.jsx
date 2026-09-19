import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pchomjh0v.css';
import '../../css/y/yqzwxjpgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pchomjh0v"/><path class="yqzwxjpgo"/>`,
		"fallback": "bx:registered",
	});
}

export default Component;
