import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri6kdpb7p.css';
import '../../css/s/s5ls0lb8w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ri6kdpb7p"/><path class="s5ls0lb8w"/></g>`,
		"fallback": "fluent-emoji-flat:sparkle",
	});
}

export default Component;
