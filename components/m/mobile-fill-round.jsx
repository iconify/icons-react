import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp8v_ebqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp8v_ebqz"/>`,
		"fallback": "coolicons:mobile-fill-round",
	});
}

export default Component;
