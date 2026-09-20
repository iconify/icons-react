import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0p98cbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0p98cbaw"/>`,
		"fallback": "simple-icons:quickbooks",
	});
}

export default Component;
