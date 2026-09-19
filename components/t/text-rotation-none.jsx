import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsk6of0ie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsk6of0ie"/>`,
		"fallback": "icon-park-outline:text-rotation-none",
	});
}

export default Component;
