import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9tzwj7ok.css';
import '../../css/b/bzy5eobti.css';
import '../../css/f/fhxzx1b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9tzwj7ok"/><path class="bzy5eobti"/><path clip-rule="evenodd" class="fhxzx1b_j"/>`,
		"fallback": "solar:text-underline-circle-outline",
	});
}

export default Component;
