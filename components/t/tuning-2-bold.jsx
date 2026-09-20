import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tvd5eoqrw.css';
import '../../css/r/rxuwlx1ct.css';
import '../../css/k/k976lzbjc.css';
import '../../css/e/el88m3h2q.css';
import '../../css/c/c26ooybxa.css';
import '../../css/k/k5p_gyubw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tvd5eoqrw"/><path class="rxuwlx1ct"/><path class="k976lzbjc"/><path class="el88m3h2q"/><path class="c26ooybxa"/><path class="k5p_gyubw"/></g>`,
		"fallback": "solar:tuning-2-bold",
	});
}

export default Component;
