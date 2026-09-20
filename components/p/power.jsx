import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1o50qj4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1o50qj4p"/>`,
		"fallback": "typcn:power",
	});
}

export default Component;
