import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp2wuju4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp2wuju4j"/>`,
		"fallback": "mingcute:tag-chevron-fill",
	});
}

export default Component;
