import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g23epvw1o.css';
import '../../css/z/zph51jbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g23epvw1o"/><path clip-rule="evenodd" class="zph51jbiz"/>`,
		"fallback": "solar:smart-home-bold-duotone",
	});
}

export default Component;
