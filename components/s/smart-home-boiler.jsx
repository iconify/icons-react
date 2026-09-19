import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj7snwbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cj7snwbgc"/>`,
		"fallback": "gg:smart-home-boiler",
	});
}

export default Component;
