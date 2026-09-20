import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lim_l8bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lim_l8bmc"/>`,
		"fallback": "reicon:textalign-justifyleft",
	});
}

export default Component;
