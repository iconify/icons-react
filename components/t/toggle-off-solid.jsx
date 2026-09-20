import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6l_3sb_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6l_3sb_z"/>`,
		"fallback": "la:toggle-off-solid",
	});
}

export default Component;
