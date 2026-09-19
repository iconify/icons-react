import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo8x__b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo8x__b5i"/>`,
		"fallback": "hugeicons:maps",
	});
}

export default Component;
