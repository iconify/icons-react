import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxsy2dbth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxsy2dbth"/>`,
		"fallback": "selfhst:vito",
	});
}

export default Component;
