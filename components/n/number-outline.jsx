import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukxrwc2bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukxrwc2bd"/>`,
		"fallback": "cuida:number-outline",
	});
}

export default Component;
