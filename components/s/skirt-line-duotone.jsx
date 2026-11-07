import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/akd1yqb9g.css';
import '../../css/v/v7xny0b-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="akd1yqb9g"/><path class="v7xny0b-b"/></g>`,
		"fallback": "solar:skirt-line-duotone",
	});
}

export default Component;
