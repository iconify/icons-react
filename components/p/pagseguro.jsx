import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icn400nlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icn400nlg"/>`,
		"fallback": "thesvg-color:pagseguro",
	});
}

export default Component;
