import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgvxtg2bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgvxtg2bf"/>`,
		"fallback": "gridicons:special-character",
	});
}

export default Component;
