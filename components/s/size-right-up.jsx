import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7r3h4bal.css';
import '../../css/n/nph80ib2c.css';
import '../../css/e/e_n9wrbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7r3h4bal"/><path class="nph80ib2c"/><rect class="e_n9wrbxe"/></g>`,
		"fallback": "lets-icons:size-right-up",
	});
}

export default Component;
