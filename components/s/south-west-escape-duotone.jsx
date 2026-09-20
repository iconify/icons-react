import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnu0hceal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnu0hceal"/>`,
		"fallback": "si:south-west-escape-duotone",
	});
}

export default Component;
