import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frsy2rb9z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frsy2rb9z"/>`,
		"fallback": "glyphs:note-pad",
	});
}

export default Component;
