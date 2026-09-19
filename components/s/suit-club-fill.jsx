import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w16kcwbym.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w16kcwbym"/>`,
		"fallback": "f7:suit-club-fill",
	});
}

export default Component;
