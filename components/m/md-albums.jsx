import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgi0i4ykh.css';
import '../../css/e/e1am0fiug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgi0i4ykh"/><path class="e1am0fiug"/>`,
		"fallback": "ion:md-albums",
	});
}

export default Component;
