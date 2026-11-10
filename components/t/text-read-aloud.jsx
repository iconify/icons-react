import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-f5n_baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-f5n_baw"/>`,
		"fallback": "andrsrxn:text-read-aloud",
	});
}

export default Component;
