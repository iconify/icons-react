import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llgj6_bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llgj6_bel"/>`,
		"fallback": "tabler:number-26-small",
	});
}

export default Component;
