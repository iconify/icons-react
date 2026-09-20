import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc7cgqb6v.css';
import '../../css/r/r24iznqrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc7cgqb6v"/><path class="r24iznqrf"/>`,
		"fallback": "streamline-freehand:send-email-fly",
	});
}

export default Component;
