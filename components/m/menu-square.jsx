import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1h5pbbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1h5pbbgd"/>`,
		"fallback": "pixelarticons:menu-square",
	});
}

export default Component;
