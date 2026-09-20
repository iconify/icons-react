import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow2q_cqck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow2q_cqck"/>`,
		"fallback": "uil:sign-right",
	});
}

export default Component;
