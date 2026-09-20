import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qstp0qt9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qstp0qt9r"/>`,
		"fallback": "token:shido",
	});
}

export default Component;
