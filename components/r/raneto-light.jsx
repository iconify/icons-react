import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr1vn-rwh.css';
import '../../css/v/v904cs9gt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr1vn-rwh"/><path class="v904cs9gt"/>`,
		"fallback": "selfhst:raneto-light",
	});
}

export default Component;
