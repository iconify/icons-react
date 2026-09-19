import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nukfgd03w.css';
import '../../css/x/xxillyb0e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nukfgd03w"/><path class="xxillyb0e"/></g>`,
		"fallback": "fluent-emoji-flat:magnet",
	});
}

export default Component;
