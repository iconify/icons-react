import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tile2lekl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tile2lekl"/>`,
		"fallback": "carbon:not-sent-filled",
	});
}

export default Component;
