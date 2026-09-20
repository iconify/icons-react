import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gjsx1wbvw.css';
import '../../css/l/l8wcb2bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gjsx1wbvw"/><path class="l8wcb2bsi"/></g>`,
		"fallback": "keyline-icons:map-pin-plus-sharp-duotone",
	});
}

export default Component;
