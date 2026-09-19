import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr3ih6bwk.css';
import '../../css/u/u27dq2b5d.css';
import '../../css/f/f6teis-du.css';
import '../../css/p/pk24iqbfe.css';
import '../../css/d/dau5tac9s.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr3ih6bwk"/><path class="u27dq2b5d"/><path class="f6teis-du"/><path class="pk24iqbfe"/><path class="dau5tac9s"/>`,
		"fallback": "fxemoji:mansshirt",
	});
}

export default Component;
