import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la9_avq4v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la9_avq4v"/>`,
		"fallback": "f7:plus",
	});
}

export default Component;
