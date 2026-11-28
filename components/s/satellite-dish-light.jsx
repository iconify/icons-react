import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsp35ou_f.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsp35ou_f"/>`,
		"fallback": "pullo:satellite-dish-light",
	});
}

export default Component;
