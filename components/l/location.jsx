import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rue4o98ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rue4o98ab"/>`,
		"fallback": "typcn:location",
	});
}

export default Component;
