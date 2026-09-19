import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyhl_60xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyhl_60xi"/>`,
		"fallback": "hugeicons:lamp-wall-up",
	});
}

export default Component;
