import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtl2x5b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtl2x5b8i"/>`,
		"fallback": "hugeicons:pin-02",
	});
}

export default Component;
