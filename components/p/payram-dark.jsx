import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spuyad3fw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spuyad3fw"/>`,
		"fallback": "selfhst:payram-dark",
	});
}

export default Component;
