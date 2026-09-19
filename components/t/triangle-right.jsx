import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imgoe2enx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imgoe2enx"/>`,
		"fallback": "hugeicons:triangle-right",
	});
}

export default Component;
