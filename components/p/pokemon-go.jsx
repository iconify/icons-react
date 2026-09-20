import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr3p3pbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr3p3pbwc"/>`,
		"fallback": "mdi:pokemon-go",
	});
}

export default Component;
