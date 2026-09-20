import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9vho9_6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9vho9_6c"/>`,
		"fallback": "mdi:music-circle",
	});
}

export default Component;
