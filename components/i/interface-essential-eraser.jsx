import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0bj62blk.css';
import '../../css/d/d53e2j-bt.css';
import '../../css/l/l6t3pibej.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0bj62blk"/><path class="d53e2j-bt"/><path class="l6t3pibej"/>`,
		"fallback": "streamline-pixel:interface-essential-eraser",
	});
}

export default Component;
