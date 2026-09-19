import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lui8lyb2d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lui8lyb2d"/>`,
		"fallback": "fluent-mdl2:telemarketer",
	});
}

export default Component;
