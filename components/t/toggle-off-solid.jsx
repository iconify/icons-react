import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz8wqzpgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fz8wqzpgv"/>`,
		"fallback": "basil:toggle-off-solid",
	});
}

export default Component;
