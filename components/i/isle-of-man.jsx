import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_-t-h0ew.css';
import '../../css/f/fxrygx0ul.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_-t-h0ew"/><path class="fxrygx0ul"/>`,
		"fallback": "tabler-flags:isle-of-man",
	});
}

export default Component;
