import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx_1zebpd.css';
import '../../css/i/i2ck-cb3c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx_1zebpd"/><path class="i2ck-cb3c"/>`,
		"fallback": "carbon:sight",
	});
}

export default Component;
