import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enjd4q_it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="enjd4q_it"/>`,
		"fallback": "reicon:shield-star",
	});
}

export default Component;
