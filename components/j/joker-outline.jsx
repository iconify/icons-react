import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a3c8mjbsl.css';
import '../../css/i/isvo6rdbz.css';
import '../../css/r/r8f-8remn.css';
import '../../css/d/dbnkfibrk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a3c8mjbsl"/><path class="isvo6rdbz"/><path class="r8f-8remn"/><path class="dbnkfibrk"/></g>`,
		"fallback": "glyphs:joker-outline",
	});
}

export default Component;
