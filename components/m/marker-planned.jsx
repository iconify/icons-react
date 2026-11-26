import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_4fr_b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_4fr_b2k"/>`,
		"fallback": "evicons:marker-planned",
	});
}

export default Component;
