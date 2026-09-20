import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxprcsbis.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxprcsbis"/>`,
		"fallback": "memory:table-top-stairs-left",
	});
}

export default Component;
