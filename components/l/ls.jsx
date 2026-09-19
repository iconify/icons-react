import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fvr9ntbch.css';
import '../../css/x/xtg752nvh.css';
import '../../css/a/asv4z3b0w.css';
import '../../css/b/bh8uixr5c.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fvr9ntbch"/><path class="xtg752nvh"/><path class="asv4z3b0w"/><path class="bh8uixr5c"/></g>`,
		"fallback": "flagpack:ls",
	});
}

export default Component;
