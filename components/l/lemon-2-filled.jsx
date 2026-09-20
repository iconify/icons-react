import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z486k_bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z486k_bsz"/>`,
		"fallback": "tabler:lemon-2-filled",
	});
}

export default Component;
