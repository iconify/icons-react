import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x3keqtbrj.css';
import '../../css/t/tvnupccgq.css';
import '../../css/j/ju3tvgbmc.css';
import '../../css/u/u4kqcvbpc.css';
import '../../css/q/qwljq9bty.css';

const viewBox = {"width":59,"height":59};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="x3keqtbrj"/><path class="tvnupccgq"/><path class="ju3tvgbmc"/><path class="u4kqcvbpc"/><path class="qwljq9bty"/></g>`,
		"fallback": "thesvg-color:transloadit",
	});
}

export default Component;
