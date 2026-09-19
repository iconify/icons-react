import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bysd2sbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bysd2sbhe"/>`,
		"fallback": "guidance:laundry",
	});
}

export default Component;
