import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckulpe9ec.css';
import '../../css/h/h_2ddrein.css';
import '../../css/f/fa_16t6kl.css';
import '../../css/b/bs-dfccax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckulpe9ec"/><path class="h_2ddrein"/><circle class="fa_16t6kl"/><path class="bs-dfccax"/>`,
		"fallback": "circum:linkedin",
	});
}

export default Component;
