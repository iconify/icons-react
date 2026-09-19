import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw-jtor1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw-jtor1u"/>`,
		"fallback": "cbi:netflix",
	});
}

export default Component;
