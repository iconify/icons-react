import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wax-ynfkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wax-ynfkv"/>`,
		"fallback": "thesvg-color:tripadvisor",
	});
}

export default Component;
