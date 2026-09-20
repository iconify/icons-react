import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytk1r_97s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytk1r_97s"/>`,
		"fallback": "pixelarticons:plus",
	});
}

export default Component;
