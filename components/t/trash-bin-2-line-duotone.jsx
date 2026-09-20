import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fh6a-dbrt.css';
import '../../css/d/d6_3dnf9e.css';
import '../../css/o/omkhhrfhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fh6a-dbrt"/><path class="d6_3dnf9e"/><path class="omkhhrfhp"/></g>`,
		"fallback": "solar:trash-bin-2-line-duotone",
	});
}

export default Component;
