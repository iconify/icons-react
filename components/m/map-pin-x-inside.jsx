import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrfi3nquj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrfi3nquj"/>`,
		"fallback": "mynaui:map-pin-x-inside",
	});
}

export default Component;
