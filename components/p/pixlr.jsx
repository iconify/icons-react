import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpz0cj0fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpz0cj0fv"/>`,
		"fallback": "thesvg:pixlr",
	});
}

export default Component;
