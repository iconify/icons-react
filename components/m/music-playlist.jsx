import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8n5xcpzi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8n5xcpzi"/>`,
		"fallback": "zondicons:music-playlist",
	});
}

export default Component;
