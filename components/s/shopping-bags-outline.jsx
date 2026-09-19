import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htd3bk08t.css';
import '../../css/t/t7ftagsyg.css';
import '../../css/n/nslp9ac8f.css';
import '../../css/d/dj40413uj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="htd3bk08t"/><path clip-rule="evenodd" class="t7ftagsyg"/><path class="nslp9ac8f"/><path clip-rule="evenodd" class="dj40413uj"/></g>`,
		"fallback": "glyphs:shopping-bags-outline",
	});
}

export default Component;
