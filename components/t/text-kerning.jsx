import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_fj8pw5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_fj8pw5u"/>`,
		"fallback": "hugeicons:text-kerning",
	});
}

export default Component;
