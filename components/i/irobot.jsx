import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa7bh5d_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa7bh5d_w"/>`,
		"fallback": "thesvg:irobot",
	});
}

export default Component;
