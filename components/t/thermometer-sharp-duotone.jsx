import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xkmafkb6z.css';
import '../../css/t/tkdid9ndg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xkmafkb6z"/><path class="tkdid9ndg"/></g>`,
		"fallback": "keyline-icons:thermometer-sharp-duotone",
	});
}

export default Component;
