import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpy7--blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpy7--blz"/>`,
		"fallback": "pixelarticons:smile",
	});
}

export default Component;
