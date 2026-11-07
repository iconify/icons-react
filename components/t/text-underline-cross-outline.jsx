import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9tzwj7ok.css';
import '../../css/b/bzy5eobti.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9tzwj7ok"/><path class="bzy5eobti"/><path clip-rule="evenodd" class="nbozb93jk"/>`,
		"fallback": "solar:text-underline-cross-outline",
	});
}

export default Component;
