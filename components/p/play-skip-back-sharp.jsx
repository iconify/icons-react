import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_w699bbc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_w699bbc"/>`,
		"fallback": "ion:play-skip-back-sharp",
	});
}

export default Component;
