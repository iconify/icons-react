import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di9d21bpl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di9d21bpl"/>`,
		"fallback": "carbon:search",
	});
}

export default Component;
