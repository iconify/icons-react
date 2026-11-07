import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwtl__1sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwtl__1sz"/>`,
		"fallback": "solar:phone-rounded-bold",
	});
}

export default Component;
