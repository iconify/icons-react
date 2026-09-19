import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uto-v3b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uto-v3b6i"/>`,
		"fallback": "cbi:shutter-100",
	});
}

export default Component;
