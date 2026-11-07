import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugxjo2rua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugxjo2rua"/>`,
		"fallback": "solar:music-note-slider-2-bold",
	});
}

export default Component;
