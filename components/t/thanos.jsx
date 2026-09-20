import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbkdscxdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbkdscxdm"/>`,
		"fallback": "simple-icons:thanos",
	});
}

export default Component;
