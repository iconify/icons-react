import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyt0ni33n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyt0ni33n"/>`,
		"fallback": "fa6-brands:internet-explorer",
	});
}

export default Component;
