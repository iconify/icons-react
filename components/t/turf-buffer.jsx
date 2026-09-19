import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xubdi0bqd.css';
import '../../css/w/wkhlrxb0n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xubdi0bqd"/><path class="wkhlrxb0n"/>`,
		"fallback": "geo:turf-buffer",
	});
}

export default Component;
