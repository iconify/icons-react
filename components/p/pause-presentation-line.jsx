import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvow-absf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvow-absf"/>`,
		"fallback": "si:pause-presentation-line",
	});
}

export default Component;
