import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_07ktnny.css';
import '../../css/j/jf0u8bbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o_07ktnny"/><path class="jf0u8bbol"/>`,
		"fallback": "solar:play-stream-bold-duotone",
	});
}

export default Component;
