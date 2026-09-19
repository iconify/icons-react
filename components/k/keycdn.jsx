import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjb21xt1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjb21xt1i"/>`,
		"fallback": "fa6-brands:keycdn",
	});
}

export default Component;
