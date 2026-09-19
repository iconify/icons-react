import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hffe1tbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hffe1tbhs"/>`,
		"fallback": "heroicons:light-bulb",
	});
}

export default Component;
