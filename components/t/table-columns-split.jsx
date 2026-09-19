import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn13i-b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn13i-b0j"/>`,
		"fallback": "hugeicons:table-columns-split",
	});
}

export default Component;
