import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1b0pbbhu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1b0pbbhu"/>`,
		"fallback": "selfhst:tableau-dark",
	});
}

export default Component;
