import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/har_mcb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="har_mcb9f"/>`,
		"fallback": "hugeicons:slow-winds",
	});
}

export default Component;
