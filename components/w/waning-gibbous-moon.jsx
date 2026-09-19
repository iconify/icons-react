import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/em5-xqbew.css';
import '../../css/i/i727_fbny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="em5-xqbew"/><path class="i727_fbny"/></g>`,
		"fallback": "fluent-emoji-high-contrast:waning-gibbous-moon",
	});
}

export default Component;
