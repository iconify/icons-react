import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/calya5bxg.css';
import '../../css/d/dq8f9xsoz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="calya5bxg"/><path class="dq8f9xsoz"/>`,
		"fallback": "selfhst:planning-center",
	});
}

export default Component;
