import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys2c0-bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ys2c0-bjq"/>`,
		"fallback": "reicon:medal",
	});
}

export default Component;
