import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cft_k0b3r.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cft_k0b3r"/>`,
		"fallback": "jam:medical",
	});
}

export default Component;
