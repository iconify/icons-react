import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u560i_b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u560i_b6b"/>`,
		"fallback": "iconoir:receive-yens",
	});
}

export default Component;
