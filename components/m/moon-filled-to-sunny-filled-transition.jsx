import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9gm1m.css';
import '../../css/e/eh8t5z.css';
import '../../css/b/botfzx.css';
import '../../css/a/a0m25c.css';
import '../../css/s/sq4kkj.css';
import '../../css/p/p-q0-i.css';
import '../../css/d/d-ve15dr.css';
import '../../css/d/d-qro6by.css';
import '../../css/f/fade-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJBr8ydsw"><path class="o9gm1m"/><path class="eh8t5z"/></mask></defs><path mask="url(#SVGJBr8ydsw)" class="botfzx"/><path class="a0m25c sq4kkj"/><path class="a0m25c p-q0-i"/>`,
		"fallback": "line-md:moon-filled-to-sunny-filled-transition",
	});
}

export default Component;
