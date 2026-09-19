import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zohv35dbe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zohv35dbe"/>`,
		"fallback": "fluent-emoji-high-contrast:mosque",
	});
}

export default Component;
