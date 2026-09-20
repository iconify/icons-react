import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpq1c0bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpq1c0bwy"/>`,
		"fallback": "tabler:transaction-dollar",
	});
}

export default Component;
