import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptpoay_pn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptpoay_pn"/>`,
		"fallback": "selfhst:slack-light",
	});
}

export default Component;
