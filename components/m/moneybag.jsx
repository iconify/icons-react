import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc0-s1bju.css';

const viewBox = {"width":960,"height":993};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc0-s1bju"/>`,
		"fallback": "whh:moneybag",
	});
}

export default Component;
