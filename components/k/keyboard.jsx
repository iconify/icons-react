import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk-6u-b3t.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk-6u-b3t"/>`,
		"fallback": "wpf:keyboard",
	});
}

export default Component;
