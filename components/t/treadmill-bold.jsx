import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6gx6-b_c.css';
import '../../css/u/ue3-gzbke.css';
import '../../css/y/yus7ucc0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6gx6-b_c"/><path clip-rule="evenodd" class="ue3-gzbke"/><path class="yus7ucc0b"/>`,
		"fallback": "solar:treadmill-bold",
	});
}

export default Component;
