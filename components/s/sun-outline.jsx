import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dazc_hbbb.css';
import '../../css/i/iybw-7did.css';
import '../../css/z/z63rirbsm.css';
import '../../css/f/fn4mlcb1l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dazc_hbbb"/><path class="iybw-7did"/><path class="z63rirbsm"/><path class="fn4mlcb1l"/></g>`,
		"fallback": "glyphs:sun-outline",
	});
}

export default Component;
