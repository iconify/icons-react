import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io5xcjbzm.css';
import '../../css/q/qwjuf14gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io5xcjbzm"/><path clip-rule="evenodd" class="qwjuf14gw"/>`,
		"fallback": "solar:shield-check-outline",
	});
}

export default Component;
