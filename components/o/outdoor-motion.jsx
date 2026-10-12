import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmt30-bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmt30-bsz"/>`,
		"fallback": "cbi:outdoor-motion",
	});
}

export default Component;
