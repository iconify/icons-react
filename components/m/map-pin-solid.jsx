import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2r8k2b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d2r8k2b1x"/>`,
		"fallback": "heroicons:map-pin-solid",
	});
}

export default Component;
