import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zl4jlpb5q.css';
import '../../css/o/o7jjhdbsd.css';
import '../../css/k/k05quqb0j.css';
import '../../css/p/ppesglbji.css';
import '../../css/e/e56ib4b-i.css';
import '../../css/e/e0oiq1b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zl4jlpb5q"/><path class="o7jjhdbsd"/><path class="k05quqb0j"/><path clip-rule="evenodd" class="ppesglbji"/><path class="e56ib4b-i"/><path class="e0oiq1b4b"/></g>`,
		"fallback": "solar:jar-of-pills-2-bold",
	});
}

export default Component;
