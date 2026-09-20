import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt8x5gmuh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt8x5gmuh"/>`,
		"fallback": "selfhst:sandstorm-light",
	});
}

export default Component;
