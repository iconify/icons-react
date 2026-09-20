import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlx0s_w4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlx0s_w4a"/>`,
		"fallback": "tabler:send-off",
	});
}

export default Component;
