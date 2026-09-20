import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0g8m7blk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a0g8m7blk"/>`,
		"fallback": "streamline-flex:pathfinder-minus-front-2-remix",
	});
}

export default Component;
