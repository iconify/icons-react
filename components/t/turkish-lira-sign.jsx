import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy_qmbbxk.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy_qmbbxk"/>`,
		"fallback": "fa6-solid:turkish-lira-sign",
	});
}

export default Component;
