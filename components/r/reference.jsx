import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnm20-03w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnm20-03w"/>`,
		"fallback": "ooui:reference",
	});
}

export default Component;
