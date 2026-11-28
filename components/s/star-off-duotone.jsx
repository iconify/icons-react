import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcvs5vdpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcvs5vdpy primary"/>`,
		"fallback": "iconaut:star-off-duotone",
	});
}

export default Component;
