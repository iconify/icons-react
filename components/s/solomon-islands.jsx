import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyxpqbbrk.css';
import '../../css/t/t9reozf7t.css';
import '../../css/y/y4-tgpb3t.css';
import '../../css/v/vtrcjz0wg.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyxpqbbrk"/><path class="t9reozf7t"/><path class="y4-tgpb3t"/><path class="vtrcjz0wg"/>`,
		"fallback": "tabler-flags:solomon-islands",
	});
}

export default Component;
