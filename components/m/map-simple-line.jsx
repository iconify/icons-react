import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ac9puxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ac9puxp"/>`,
		"fallback": "majesticons:map-simple-line",
	});
}

export default Component;
