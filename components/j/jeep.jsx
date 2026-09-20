import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga4go3bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga4go3bft"/>`,
		"fallback": "thesvg-color:jeep",
	});
}

export default Component;
