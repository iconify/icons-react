import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzktj7b9t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzktj7b9t"/>`,
		"fallback": "catppuccin:mermaid",
	});
}

export default Component;
