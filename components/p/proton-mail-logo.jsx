import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3h3j67jh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3h3j67jh"/>`,
		"fallback": "lineicons:proton-mail-logo",
	});
}

export default Component;
