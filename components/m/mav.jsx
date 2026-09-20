import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhdm0f4my.css';
import '../../css/n/nzkrizz9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhdm0f4my"/><path clip-rule="evenodd" class="nzkrizz9p"/>`,
		"fallback": "token:mav",
	});
}

export default Component;
