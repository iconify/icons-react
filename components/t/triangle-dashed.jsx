import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjizu5b3v.css';
import '../../css/h/hsrunwbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjizu5b3v"/><path class="hsrunwbjj"/></g>`,
		"fallback": "andrsrxn:triangle-dashed",
	});
}

export default Component;
