import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpjfjpbop.css';
import '../../css/d/dqsya0j4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpjfjpbop"/><path class="dqsya0j4o"/>`,
		"fallback": "solar:muted-bold",
	});
}

export default Component;
