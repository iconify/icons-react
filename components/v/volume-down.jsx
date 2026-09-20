import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzo-r3c9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzo-r3c9w"/>`,
		"fallback": "uil:volume-down",
	});
}

export default Component;
