import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owgf6abpu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owgf6abpu"/>`,
		"fallback": "la:mosque-solid",
	});
}

export default Component;
