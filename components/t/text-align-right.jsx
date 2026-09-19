import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfk-bw21h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfk-bw21h"/>`,
		"fallback": "fe:text-align-right",
	});
}

export default Component;
