import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-n20_but.css';
import '../../css/x/x8vchdb5d.css';
import '../../css/i/i8tu9nw5b.css';
import '../../css/e/ezvwt8buk.css';
import '../../css/c/ckye5vm_q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t-n20_but"><path class="x8vchdb5d"/><path class="i8tu9nw5b"/><path class="ezvwt8buk"/><path class="ckye5vm_q"/></g>`,
		"fallback": "glyphs-poly:tree-5",
	});
}

export default Component;
