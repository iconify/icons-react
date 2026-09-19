import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wejjyi8fq.css';
import '../../css/i/im3c3rjxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wejjyi8fq"/><path class="im3c3rjxf"/>`,
		"fallback": "ion:ios-wallet",
	});
}

export default Component;
