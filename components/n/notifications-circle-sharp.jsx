import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygvvp4myp.css';
import '../../css/a/a__8s7rjg.css';
import '../../css/v/v0ghp0p0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygvvp4myp"/><path class="a__8s7rjg"/><path class="v0ghp0p0b"/>`,
		"fallback": "ion:notifications-circle-sharp",
	});
}

export default Component;
