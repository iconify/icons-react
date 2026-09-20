import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sscfj9bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sscfj9bpr"/>`,
		"fallback": "thesvg-color:tv4-play",
	});
}

export default Component;
