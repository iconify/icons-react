import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffvnfut_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffvnfut_t"/>`,
		"fallback": "gg:trees",
	});
}

export default Component;
