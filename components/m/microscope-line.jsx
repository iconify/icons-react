import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1cj90bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1cj90bbp"/>`,
		"fallback": "ri:microscope-line",
	});
}

export default Component;
