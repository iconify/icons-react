import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6zo9pbyz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6zo9pbyz"/>`,
		"fallback": "streamline-flex:thread-post-tweet-remix",
	});
}

export default Component;
