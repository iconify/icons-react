import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk1z5mbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk1z5mbzq"/>`,
		"fallback": "pixelarticons:spray",
	});
}

export default Component;
