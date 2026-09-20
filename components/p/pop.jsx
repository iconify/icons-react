import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw--h24ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw--h24ia"/>`,
		"fallback": "token:pop",
	});
}

export default Component;
