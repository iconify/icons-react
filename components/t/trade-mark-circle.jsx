import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcje_ok-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcje_ok-j"/>`,
		"fallback": "hugeicons:trade-mark-circle",
	});
}

export default Component;
