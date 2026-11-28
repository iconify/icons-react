import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuq6snofp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuq6snofp"/>`,
		"fallback": "noviair-light:music-heart",
	});
}

export default Component;
