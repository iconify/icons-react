import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6cxf3bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6cxf3bzy"/>`,
		"fallback": "hugeicons:office-365",
	});
}

export default Component;
