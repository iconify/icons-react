import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb9f9lq0k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb9f9lq0k"/>`,
		"fallback": "map:plumber",
	});
}

export default Component;
