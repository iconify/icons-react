import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je0ehx_fa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="je0ehx_fa"/>`,
		"fallback": "streamline:line-arrow-crossover-left-remix",
	});
}

export default Component;
