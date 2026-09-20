import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub1plsr2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub1plsr2f"/>`,
		"fallback": "lucide:waves-arrow-up",
	});
}

export default Component;
