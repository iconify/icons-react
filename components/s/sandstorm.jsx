import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl_5jt7fh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl_5jt7fh"/>`,
		"fallback": "game-icons:sandstorm",
	});
}

export default Component;
