import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlu4xcbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlu4xcbir"/>`,
		"fallback": "noviair:water-glass",
	});
}

export default Component;
