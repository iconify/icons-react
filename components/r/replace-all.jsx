import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ji6u8v2gx.css';
import '../../css/w/w1ei77bwa.css';
import '../../css/p/pebu9abvj.css';
import '../../css/i/io862l57z.css';
import '../../css/o/olnn03mma.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ji6u8v2gx"/><path clip-rule="evenodd" class="w1ei77bwa"/><path class="pebu9abvj"/><path clip-rule="evenodd" class="io862l57z"/><path class="olnn03mma"/></g>`,
		"fallback": "codicon:replace-all",
	});
}

export default Component;
