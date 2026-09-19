import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u6omv9ofk.css';
import '../../css/e/e4p8vf7to.css';
import '../../css/g/glovd0xbt.css';
import '../../css/w/w45-n2gzk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u6omv9ofk"/><path class="e4p8vf7to"/><path class="glovd0xbt"/><path class="w45-n2gzk"/></g>`,
		"fallback": "glyphs:tag-outline",
	});
}

export default Component;
