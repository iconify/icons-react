import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5_ohccyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5_ohccyg"/>`,
		"fallback": "selfhst:mxroute-light",
	});
}

export default Component;
