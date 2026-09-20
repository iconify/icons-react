import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5ro0_byn.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5ro0_byn"/>`,
		"fallback": "picon:rss",
	});
}

export default Component;
