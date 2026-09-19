import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl5_wzbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl5_wzbwb"/>`,
		"fallback": "hugeicons:shield-half",
	});
}

export default Component;
