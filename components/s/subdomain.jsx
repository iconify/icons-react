import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c32_mab1a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c32_mab1a"/>`,
		"fallback": "whh:subdomain",
	});
}

export default Component;
