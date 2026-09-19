import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqfn3tbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqfn3tbyv"/>`,
		"fallback": "hugeicons:maximize-03",
	});
}

export default Component;
