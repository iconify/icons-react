import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo_f4rbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo_f4rbos"/>`,
		"fallback": "uil:text-strike-through",
	});
}

export default Component;
