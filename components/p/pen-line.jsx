import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewg-glb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewg-glb0z"/>`,
		"fallback": "keyline-icons:pen-line",
	});
}

export default Component;
