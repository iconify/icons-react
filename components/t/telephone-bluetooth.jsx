import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1kvy0b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1kvy0b2k"/>`,
		"fallback": "mdi:telephone-bluetooth",
	});
}

export default Component;
