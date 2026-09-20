import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bvkhikf6c.css';
import '../../css/x/xnh1ybbye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bvkhikf6c"/><path class="xnh1ybbye"/></g>`,
		"fallback": "solar:pip-line-duotone",
	});
}

export default Component;
