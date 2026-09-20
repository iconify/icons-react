import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk8l4sozy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk8l4sozy"/>`,
		"fallback": "thesvg-color:monogame",
	});
}

export default Component;
