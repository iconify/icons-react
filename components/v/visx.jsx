import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blz_a82jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blz_a82jo"/>`,
		"fallback": "thesvg:visx",
	});
}

export default Component;
