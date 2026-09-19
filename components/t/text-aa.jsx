import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei66cbbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei66cbbai"/>`,
		"fallback": "humbleicons:text-aa",
	});
}

export default Component;
