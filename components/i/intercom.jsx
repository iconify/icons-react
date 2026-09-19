import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z38gfkbpg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z38gfkbpg"/>`,
		"fallback": "fa6-brands:intercom",
	});
}

export default Component;
