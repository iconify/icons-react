import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of74y6r7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of74y6r7u"/>`,
		"fallback": "eva:map-fill",
	});
}

export default Component;
