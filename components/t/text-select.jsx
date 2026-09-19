import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egk3f8m5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egk3f8m5z"/>`,
		"fallback": "hugeicons:text-select",
	});
}

export default Component;
