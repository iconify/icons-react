import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ua42g8k2n.css';
import '../../css/a/atju2nboc.css';
import '../../css/a/a5eu5hryi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ua42g8k2n"/><path class="atju2nboc"/><path class="a5eu5hryi"/></g>`,
		"fallback": "andrsrxn:mouse-signal",
	});
}

export default Component;
