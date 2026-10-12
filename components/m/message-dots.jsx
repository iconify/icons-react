import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i00bmr7ot.css';
import '../../css/f/fv3l_rq4r.css';
import '../../css/j/jsp8lqavy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i00bmr7ot"/><path class="fv3l_rq4r"/><path class="jsp8lqavy"/></g>`,
		"fallback": "andrsrxn:message-dots",
	});
}

export default Component;
