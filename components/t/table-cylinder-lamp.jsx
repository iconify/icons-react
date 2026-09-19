import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdajy4bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdajy4bjg"/>`,
		"fallback": "cbi:table-cylinder-lamp",
	});
}

export default Component;
