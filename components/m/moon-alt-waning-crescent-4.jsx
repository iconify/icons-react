import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n02m9nptx.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n02m9nptx"/>`,
		"fallback": "wi:moon-alt-waning-crescent-4",
	});
}

export default Component;
