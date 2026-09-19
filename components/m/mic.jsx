import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v95ogbcrf.css';

const viewBox = {"width":304,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v95ogbcrf"/>`,
		"fallback": "zmdi:mic",
	});
}

export default Component;
