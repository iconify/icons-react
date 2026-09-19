import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqhh7pbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqhh7pbcl"/>`,
		"fallback": "gridicons:search",
	});
}

export default Component;
