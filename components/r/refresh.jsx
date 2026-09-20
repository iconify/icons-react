import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl-6ywx-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl-6ywx-d"/>`,
		"fallback": "pixelarticons:refresh",
	});
}

export default Component;
