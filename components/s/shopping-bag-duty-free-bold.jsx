import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rihw6xbol.css';
import '../../css/e/epi033bwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rihw6xbol"/><path class="epi033bwu"/>`,
		"fallback": "streamline-ultimate:shopping-bag-duty-free-bold",
	});
}

export default Component;
