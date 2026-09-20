import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t09_lb0hx.css';
import '../../css/s/s258ekblf.css';
import '../../css/x/xm5q3eb_h.css';
import '../../css/s/szxp8d7ki.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t09_lb0hx"/><path class="s258ekblf"/><path class="xm5q3eb_h"/><path class="szxp8d7ki"/>`,
		"fallback": "selfhst:readeck",
	});
}

export default Component;
