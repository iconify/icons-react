import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzh0n7bgu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzh0n7bgu"/>`,
		"fallback": "pinhead:pixel-house-with-chimney",
	});
}

export default Component;
