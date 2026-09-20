import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b8sqeq3do.css';
import '../../css/g/gog0a1c5n.css';
import '../../css/c/cx25de5zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b8sqeq3do"/><path class="gog0a1c5n"/><circle class="cx25de5zj"/></g>`,
		"fallback": "solar:routing-line-duotone",
	});
}

export default Component;
