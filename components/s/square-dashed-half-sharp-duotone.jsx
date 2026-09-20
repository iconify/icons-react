import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wsl9iwbmu.css';
import '../../css/i/ilni1fwet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="wsl9iwbmu"/><path class="ilni1fwet"/></g>`,
		"fallback": "keyline-icons:square-dashed-half-sharp-duotone",
	});
}

export default Component;
