import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/iilrtq97p.css';
import '../../css/l/l9gqw4bde.css';
import '../../css/f/fmu2vzbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="iilrtq97p"/><path class="l9gqw4bde"/><path class="fmu2vzbby"/></g>`,
		"fallback": "keyline-icons:smartphone-sparkles-sharp-duotone",
	});
}

export default Component;
