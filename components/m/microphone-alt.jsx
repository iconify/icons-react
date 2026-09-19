import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbr4szslo.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbr4szslo"/>`,
		"fallback": "fa-solid:microphone-alt",
	});
}

export default Component;
