import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6g48wlqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6g48wlqr"/>`,
		"fallback": "prime:user-minus",
	});
}

export default Component;
