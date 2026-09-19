import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jldw8tb5j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jldw8tb5j"/>`,
		"fallback": "fa7-solid:money-bill",
	});
}

export default Component;
