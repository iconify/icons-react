import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/non-2rb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="non-2rb_d"/>`,
		"fallback": "hugeicons:new-twitter",
	});
}

export default Component;
