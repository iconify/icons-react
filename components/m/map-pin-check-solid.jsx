import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwvkl-j3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwvkl-j3b"/>`,
		"fallback": "iconaut:map-pin-check-solid",
	});
}

export default Component;
