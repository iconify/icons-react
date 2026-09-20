import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9qh6-brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9qh6-brw"/>`,
		"fallback": "mynaui:letter-h-waves",
	});
}

export default Component;
