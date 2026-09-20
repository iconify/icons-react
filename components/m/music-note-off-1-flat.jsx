import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s7idarbmz.css';
import '../../css/b/b7yxipbxk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s7idarbmz"/><path class="b7yxipbxk"/></g>`,
		"fallback": "streamline-color:music-note-off-1-flat",
	});
}

export default Component;
