import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk83ul6px.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk83ul6px"/>`,
		"fallback": "game-icons:receive-money",
	});
}

export default Component;
