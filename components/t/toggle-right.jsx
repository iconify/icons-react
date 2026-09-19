import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrvx5zbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrvx5zbmf"/>`,
		"fallback": "bxs:toggle-right",
	});
}

export default Component;
