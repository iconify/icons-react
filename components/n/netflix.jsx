import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9qwa6bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9qwa6bht"/>`,
		"fallback": "cbi:netflix",
	});
}

export default Component;
