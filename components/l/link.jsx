import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtnwm7b1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtnwm7b1j"/>`,
		"fallback": "meteor-icons:link",
	});
}

export default Component;
