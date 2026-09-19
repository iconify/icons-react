import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy_d4cc_d.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy_d4cc_d"/>`,
		"fallback": "fa6-solid:mosquito-net",
	});
}

export default Component;
