import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7o3g-5yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7o3g-5yu"/>`,
		"fallback": "cbi:smart-desk-lamp",
	});
}

export default Component;
