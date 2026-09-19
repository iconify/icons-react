import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkh4z0b6q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkh4z0b6q"/>`,
		"fallback": "carbon:number-small-2",
	});
}

export default Component;
