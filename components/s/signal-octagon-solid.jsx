import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmhw54u1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmhw54u1u"/>`,
		"fallback": "mynaui:signal-octagon-solid",
	});
}

export default Component;
