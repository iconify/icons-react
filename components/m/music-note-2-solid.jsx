import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aub2nm7hz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aub2nm7hz"/>`,
		"fallback": "streamline:music-note-2-solid",
	});
}

export default Component;
