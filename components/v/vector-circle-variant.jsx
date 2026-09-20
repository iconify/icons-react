import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xculh0bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xculh0bsl"/>`,
		"fallback": "mdi:vector-circle-variant",
	});
}

export default Component;
