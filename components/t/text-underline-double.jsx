import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz_1w_b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz_1w_b4a"/>`,
		"fallback": "andrsrxn:text-underline-double",
	});
}

export default Component;
