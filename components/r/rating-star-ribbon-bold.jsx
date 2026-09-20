import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geymjob6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geymjob6e"/>`,
		"fallback": "streamline-ultimate:rating-star-ribbon-bold",
	});
}

export default Component;
