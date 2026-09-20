import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az94a4bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az94a4bxo"/>`,
		"fallback": "thesvg-color:known",
	});
}

export default Component;
