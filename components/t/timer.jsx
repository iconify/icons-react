import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmpz-2bcd.css';

const viewBox = {"width":384,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmpz-2bcd"/>`,
		"fallback": "zmdi:timer",
	});
}

export default Component;
