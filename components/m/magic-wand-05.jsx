import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug70ei58j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug70ei58j"/>`,
		"fallback": "hugeicons:magic-wand-05",
	});
}

export default Component;
