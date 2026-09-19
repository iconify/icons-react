import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c29gppbhf.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c29gppbhf"/>`,
		"fallback": "fontisto:spinner-rotate-forward",
	});
}

export default Component;
