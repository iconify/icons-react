import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7y63b7b.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv7y63b7b"/>`,
		"fallback": "zmdi:scanner",
	});
}

export default Component;
