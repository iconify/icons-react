import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a96n0ac9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a96n0ac9e"/>`,
		"fallback": "cbi:ring-stick-up-cam",
	});
}

export default Component;
