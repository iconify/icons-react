import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev04l0b7x.css';
import '../../css/w/wr4eu4bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev04l0b7x"/><path clip-rule="evenodd" class="wr4eu4bhr"/>`,
		"fallback": "solar:map-point-search-bold-duotone",
	});
}

export default Component;
