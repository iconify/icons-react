import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4t2ktbpz.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4t2ktbpz"/>`,
		"fallback": "wi:owm-night-504",
	});
}

export default Component;
