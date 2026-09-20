import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4nzv9bqi.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4nzv9bqi"/>`,
		"fallback": "wi:raindrop",
	});
}

export default Component;
