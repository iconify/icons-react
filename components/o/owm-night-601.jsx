import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdam__0oy.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdam__0oy"/>`,
		"fallback": "wi:owm-night-601",
	});
}

export default Component;
