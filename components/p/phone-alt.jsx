import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjq2_lbky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjq2_lbky"/>`,
		"fallback": "fa-solid:phone-alt",
	});
}

export default Component;
