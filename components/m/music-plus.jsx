import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms1gxsr0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms1gxsr0h"/>`,
		"fallback": "noviair-light:music-plus",
	});
}

export default Component;
