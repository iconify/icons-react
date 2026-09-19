import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4h-6kbxp.css';
import '../../css/o/ooxjw-29z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4h-6kbxp"/><path class="ooxjw-29z"/>`,
		"fallback": "bxs:select-multiple",
	});
}

export default Component;
