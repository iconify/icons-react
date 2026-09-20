import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_bbh3b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_bbh3b1r"/>`,
		"fallback": "thesvg-color:playstation-vita",
	});
}

export default Component;
