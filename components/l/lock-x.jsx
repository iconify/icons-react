import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8ix8qb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8ix8qb8j"/>`,
		"fallback": "noviair:lock-x",
	});
}

export default Component;
