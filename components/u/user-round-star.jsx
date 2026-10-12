import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v440o84zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v440o84zi"/>`,
		"fallback": "lucide:user-round-star",
	});
}

export default Component;
