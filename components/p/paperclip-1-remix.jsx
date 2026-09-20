import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdq67nb9a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jdq67nb9a"/>`,
		"fallback": "streamline-flex:paperclip-1-remix",
	});
}

export default Component;
