import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er0rbpczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er0rbpczb"/>`,
		"fallback": "bitcoin-icons:shield-filled",
	});
}

export default Component;
