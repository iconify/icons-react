import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfg-xccrw.css';
import '../../css/q/qo397l2vm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfg-xccrw"/><path class="qo397l2vm"/>`,
		"fallback": "ion:ios-phone-landscape",
	});
}

export default Component;
