import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcshp1bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcshp1bqp"/>`,
		"fallback": "thesvg-color:malt",
	});
}

export default Component;
