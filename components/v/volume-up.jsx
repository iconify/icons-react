import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2lm7d1fb.css';
import '../../css/p/plxuwnb-i.css';
import '../../css/r/rv-ah4_ql.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2lm7d1fb"/><path class="plxuwnb-i"/><path class="rv-ah4_ql"/></g>`,
		"fallback": "bi:volume-up",
	});
}

export default Component;
