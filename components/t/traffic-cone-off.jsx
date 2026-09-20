import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqhi3t3gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqhi3t3gj"/>`,
		"fallback": "tabler:traffic-cone-off",
	});
}

export default Component;
