import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwp6cxbin.css';
import '../../css/t/t5vikhbba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwp6cxbin"/><path class="t5vikhbba"/>`,
		"fallback": "selfhst:pogocache",
	});
}

export default Component;
