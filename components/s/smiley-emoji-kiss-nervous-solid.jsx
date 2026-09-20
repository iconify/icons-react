import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgzcs4-ej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wgzcs4-ej"/>`,
		"fallback": "streamline:smiley-emoji-kiss-nervous-solid",
	});
}

export default Component;
