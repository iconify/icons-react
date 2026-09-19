import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzonc9brq.css';
import '../../css/h/h2ks3p8yr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzonc9brq"/><path class="h2ks3p8yr"/>`,
		"fallback": "ion:monitor",
	});
}

export default Component;
