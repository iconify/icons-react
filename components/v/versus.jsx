import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh9kznkpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh9kznkpv"/>`,
		"fallback": "hugeicons:versus",
	});
}

export default Component;
