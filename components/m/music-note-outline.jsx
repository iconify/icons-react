import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmmehnb-i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gmmehnb-i"/>`,
		"fallback": "glyphs:music-note-outline",
	});
}

export default Component;
