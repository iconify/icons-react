import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no5zah91j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no5zah91j"/>`,
		"fallback": "streamline:interface-text-formatting-sigma-formula-text-format-sigma-formatting-sum",
	});
}

export default Component;
