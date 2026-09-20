import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb_gs7z-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb_gs7z-r"/>`,
		"fallback": "pixelarticons:volume-2",
	});
}

export default Component;
