import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us0-41abq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="us0-41abq"/>`,
		"fallback": "solar:star-shine-outline",
	});
}

export default Component;
