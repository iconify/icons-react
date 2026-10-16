import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc_dtup7b.css';
import '../../css/p/p0bs64bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rc_dtup7b"/><path class="p0bs64bgd"/></g>`,
		"fallback": "andrsrxn:speech-to-film",
	});
}

export default Component;
