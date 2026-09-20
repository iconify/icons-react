import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y96q7hymd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y96q7hymd"/>`,
		"fallback": "selfhst:loki-light",
	});
}

export default Component;
