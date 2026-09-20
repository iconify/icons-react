import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk7_6xv2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lk7_6xv2w"/>`,
		"fallback": "solar:square-arrow-right-outline",
	});
}

export default Component;
