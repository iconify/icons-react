import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwno12vfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwno12vfg"/>`,
		"fallback": "lets-icons:sign-out-squre-fill",
	});
}

export default Component;
