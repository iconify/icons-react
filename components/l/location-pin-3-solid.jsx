import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqmamx0he.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nqmamx0he"/>`,
		"fallback": "streamline:location-pin-3-solid",
	});
}

export default Component;
