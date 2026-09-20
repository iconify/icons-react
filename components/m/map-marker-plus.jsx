import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrnwgv0ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrnwgv0ox"/>`,
		"fallback": "uil:map-marker-plus",
	});
}

export default Component;
