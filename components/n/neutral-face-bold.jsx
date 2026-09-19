import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/istz93bkq.css';
import '../../css/d/d1nyn72ly.css';
import '../../css/y/ylzxxojfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="istz93bkq"/><path class="d1nyn72ly"/><path class="ylzxxojfw"/></g>`,
		"fallback": "iconamoon:neutral-face-bold",
	});
}

export default Component;
