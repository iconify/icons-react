import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbeql4bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbeql4bwk"/>`,
		"fallback": "keyline-icons:smartphone-arrow-in-up-right-sharp",
	});
}

export default Component;
