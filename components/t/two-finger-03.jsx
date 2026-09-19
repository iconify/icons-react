import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkv49fbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkv49fbka"/>`,
		"fallback": "hugeicons:two-finger-03",
	});
}

export default Component;
