import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzr_c-blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzr_c-blw"/>`,
		"fallback": "cbi:prusa-xl",
	});
}

export default Component;
