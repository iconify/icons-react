import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fugu89b4v.css';
import '../../css/p/p2n92d6cl.css';
import '../../css/t/tatnkhskm.css';
import '../../css/h/hfss7-f3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fugu89b4v"/><path class="p2n92d6cl"/><path class="tatnkhskm"/><path class="hfss7-f3b"/></g>`,
		"fallback": "andrsrxn:repeat-one",
	});
}

export default Component;
