import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt6oa8btc.css';
import '../../css/n/n2b3ufqkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt6oa8btc"/><path class="n2b3ufqkh"/>`,
		"fallback": "ion:ios-pause",
	});
}

export default Component;
