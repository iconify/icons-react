import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuksv_b7z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vuksv_b7z"/>`,
		"fallback": "streamline:magic-wand-2-solid",
	});
}

export default Component;
