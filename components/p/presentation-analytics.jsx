import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0n5t_msv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0n5t_msv"/>`,
		"fallback": "tabler:presentation-analytics",
	});
}

export default Component;
