import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5f-4y4sa.css';
import '../../css/d/d04d3acre.css';
import '../../css/i/izzti6-0z.css';
import '../../css/z/zoa5xtbou.css';
import '../../css/b/bowjq9g_i.css';
import '../../css/n/nuh5gzbto.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q5f-4y4sa"/><path class="d04d3acre"/><path clip-rule="evenodd" class="izzti6-0z"/><path clip-rule="evenodd" class="zoa5xtbou"/><path class="bowjq9g_i"/><path clip-rule="evenodd" class="nuh5gzbto"/></g>`,
		"fallback": "glyphs:sad-tear-outline",
	});
}

export default Component;
