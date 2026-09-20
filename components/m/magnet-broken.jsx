import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa5uo2b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa5uo2b_k"/>`,
		"fallback": "solar:magnet-broken",
	});
}

export default Component;
