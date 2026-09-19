import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnhzr4bxv.css';
import '../../css/s/si-8z06fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnhzr4bxv"/><path class="si-8z06fj"/>`,
		"fallback": "eva:volume-up-fill",
	});
}

export default Component;
