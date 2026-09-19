import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg9a5mbfj.css';
import '../../css/p/phqvtfx7h.css';
import '../../css/t/t5rgi3bje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gg9a5mbfj"/><path class="phqvtfx7h"/><path class="t5rgi3bje"/></g>`,
		"fallback": "at-icons:layers",
	});
}

export default Component;
