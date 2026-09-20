import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lamhijb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lamhijb_l"/>`,
		"fallback": "keyline-icons:toggle-off-fill",
	});
}

export default Component;
