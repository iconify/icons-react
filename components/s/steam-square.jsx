import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrwisccxm.css';

const viewBox = {"width":440,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrwisccxm"/>`,
		"fallback": "zmdi:steam-square",
	});
}

export default Component;
