import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1njp3l4b.css';
import '../../css/k/kbs-npw-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1njp3l4b"/><path class="kbs-npw-s"/>`,
		"fallback": "meteocons:moon-waxing-gibbous",
	});
}

export default Component;
