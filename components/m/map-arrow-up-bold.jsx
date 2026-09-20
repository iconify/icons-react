import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg7d74d9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg7d74d9a"/>`,
		"fallback": "solar:map-arrow-up-bold",
	});
}

export default Component;
