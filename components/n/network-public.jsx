import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj1ucjb-u.css';
import '../../css/i/ixx-con_e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj1ucjb-u"/><path class="ixx-con_e"/>`,
		"fallback": "carbon:network-public",
	});
}

export default Component;
