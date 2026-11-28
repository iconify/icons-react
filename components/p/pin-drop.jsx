import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhuycni3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhuycni3q"/>`,
		"fallback": "noviair-light:pin-drop",
	});
}

export default Component;
