import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyum4tzso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyum4tzso"/>`,
		"fallback": "selfhst:krakend",
	});
}

export default Component;
