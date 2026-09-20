import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/thkopl_9m.css';
import '../../css/m/mmgrvcb7f.css';
import '../../css/g/g67_oophs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="thkopl_9m"/><path class="mmgrvcb7f"/><path class="g67_oophs"/></g>`,
		"fallback": "keyline-icons:umbrella-off-sharp-duotone",
	});
}

export default Component;
