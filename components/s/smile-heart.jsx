import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0q4cdc_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0q4cdc_s"/>`,
		"fallback": "fe:smile-heart",
	});
}

export default Component;
