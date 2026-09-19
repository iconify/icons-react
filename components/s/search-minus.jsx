import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uowjoqehi.css';
import '../../css/h/h2wu78b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uowjoqehi"/><path class="h2wu78b0j"/>`,
		"fallback": "boxicons:search-minus",
	});
}

export default Component;
