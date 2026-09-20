import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf19libts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pf19libts"/>`,
		"fallback": "token:jasmy",
	});
}

export default Component;
