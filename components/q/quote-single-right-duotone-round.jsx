import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrqwcb-bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrqwcb-bf"/>`,
		"fallback": "coolicons:quote-single-right-duotone-round",
	});
}

export default Component;
