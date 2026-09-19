import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjuv6rb-n.css';

const viewBox = {"width":360,"height":424};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjuv6rb-n"/>`,
		"fallback": "zmdi:language-html5",
	});
}

export default Component;
