import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gjsx1wbvw.css';
import '../../css/f/f5orx8b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gjsx1wbvw"/><path class="f5orx8b6x"/></g>`,
		"fallback": "keyline-icons:map-pin-minus-sharp-two-tone",
	});
}

export default Component;
