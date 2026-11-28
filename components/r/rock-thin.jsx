import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za31fkbav.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za31fkbav"/>`,
		"fallback": "pullo:rock-thin",
	});
}

export default Component;
