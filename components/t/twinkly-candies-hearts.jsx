import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loibq93je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loibq93je"/>`,
		"fallback": "cbi:twinkly-candies-hearts",
	});
}

export default Component;
