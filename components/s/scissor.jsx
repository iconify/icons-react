import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la20gcqdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la20gcqdw"/>`,
		"fallback": "akar-icons:scissor",
	});
}

export default Component;
