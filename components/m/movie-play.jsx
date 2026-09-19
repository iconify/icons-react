import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtr2n8b0s.css';
import '../../css/o/o9scry_ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtr2n8b0s"/><path class="o9scry_ak"/>`,
		"fallback": "boxicons:movie-play",
	});
}

export default Component;
