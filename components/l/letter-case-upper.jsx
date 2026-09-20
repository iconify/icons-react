import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lca4iab0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lca4iab0y"/>`,
		"fallback": "tabler:letter-case-upper",
	});
}

export default Component;
