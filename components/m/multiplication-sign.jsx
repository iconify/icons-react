import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm6xyubvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm6xyubvc"/>`,
		"fallback": "hugeicons:multiplication-sign",
	});
}

export default Component;
