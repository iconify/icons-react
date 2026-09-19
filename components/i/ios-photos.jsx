import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfrw229ma.css';
import '../../css/y/yz4sh9bvv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfrw229ma"/><path class="yz4sh9bvv"/>`,
		"fallback": "ion:ios-photos",
	});
}

export default Component;
