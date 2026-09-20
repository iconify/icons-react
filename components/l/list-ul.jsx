import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0fc02bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0fc02bet"/>`,
		"fallback": "uil:list-ul",
	});
}

export default Component;
