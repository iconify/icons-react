import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u16yhsa_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u16yhsa_c"/>`,
		"fallback": "solar:lock-unlocked-outline",
	});
}

export default Component;
