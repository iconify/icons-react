import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_9hczfll.css';
import '../../css/b/b-2x5j9ix.css';
import '../../css/v/v6-odob5a.css';
import '../../css/f/fwhfu2b1c.css';
import '../../css/d/d1mhlbc-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_9hczfll"/><path class="b-2x5j9ix"/><path class="v6-odob5a"/><path class="fwhfu2b1c"/><path class="d1mhlbc-b"/></g>`,
		"fallback": "andrsrxn:wallet-minus",
	});
}

export default Component;
