import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4e6-gb8i.css';
import '../../css/y/y6h6rjbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4e6-gb8i"/><path class="y6h6rjbdn"/></g>`,
		"fallback": "si:nope-duotone",
	});
}

export default Component;
