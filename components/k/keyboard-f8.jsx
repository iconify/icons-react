import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z27h5bbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z27h5bbzs"/>`,
		"fallback": "mdi:keyboard-f8",
	});
}

export default Component;
