import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf5j0-bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf5j0-bpg"/>`,
		"fallback": "pixelarticons:telegram-glyph",
	});
}

export default Component;
