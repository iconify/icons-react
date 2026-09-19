import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8m1s5y6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8m1s5y6a"/>`,
		"fallback": "cbi:mini-bmw",
	});
}

export default Component;
