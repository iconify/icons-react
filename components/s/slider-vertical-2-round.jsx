import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zymrr9x_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zymrr9x_f"/>`,
		"fallback": "coolicons:slider-vertical-2-round",
	});
}

export default Component;
