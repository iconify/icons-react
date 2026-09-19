import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpxmm_7co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpxmm_7co"/>`,
		"fallback": "boxicons:invert-filled",
	});
}

export default Component;
