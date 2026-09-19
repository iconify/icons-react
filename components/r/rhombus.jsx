import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u31id3bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u31id3bps"/>`,
		"fallback": "hugeicons:rhombus",
	});
}

export default Component;
