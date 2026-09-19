import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujmfz-dyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujmfz-dyc"/>`,
		"fallback": "bxl:vite-js",
	});
}

export default Component;
