import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdwunab8w.css';
import '../../css/h/hjv1atbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdwunab8w"/><path class="hjv1atbpp"/>`,
		"fallback": "circum:lemon",
	});
}

export default Component;
