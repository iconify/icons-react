import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/roedgmbao.css';
import '../../css/c/coskslbmy.css';
import '../../css/t/t2jllsy6y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="roedgmbao"/><path class="coskslbmy"/><path class="t2jllsy6y"/></g>`,
		"fallback": "glyphs:palm-tree-bold",
	});
}

export default Component;
