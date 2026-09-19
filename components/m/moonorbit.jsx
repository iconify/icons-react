import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg0wogbkt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg0wogbkt"/>`,
		"fallback": "whh:moonorbit",
	});
}

export default Component;
