import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2b_itrtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2b_itrtk"/>`,
		"fallback": "lucide:triangle-dashed",
	});
}

export default Component;
