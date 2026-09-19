import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sicc9-b3w.css';
import '../../css/x/x2mt7mwiz.css';
import '../../css/l/l9xqvz5sp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sicc9-b3w"/><path class="x2mt7mwiz"/><path class="l9xqvz5sp"/></g>`,
		"fallback": "bi:music-note",
	});
}

export default Component;
