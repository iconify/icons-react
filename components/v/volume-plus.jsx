import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-g200b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-g200b_z"/>`,
		"fallback": "mdi-light:volume-plus",
	});
}

export default Component;
