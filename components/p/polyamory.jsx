import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh7-72bhh.css';
import '../../css/v/v96qanblm.css';
import '../../css/j/j7csacblk.css';
import '../../css/g/g1v2fd4-t.css';
import '../../css/j/jr20ymshp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh7-72bhh"/><path class="v96qanblm"/><path class="j7csacblk"/><path class="g1v2fd4-t"/><path class="jr20ymshp"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:polyamory",
	});
}

export default Component;
