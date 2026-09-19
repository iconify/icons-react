import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9wbutb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9wbutb3e"/>`,
		"fallback": "cbi:ppl",
	});
}

export default Component;
