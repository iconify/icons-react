import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvh306brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvh306brv"/>`,
		"fallback": "tdesign:tv-1-filled",
	});
}

export default Component;
