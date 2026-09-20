import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmyuz8c8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dmyuz8c8b"/>`,
		"fallback": "solar:volume-cross-outline",
	});
}

export default Component;
