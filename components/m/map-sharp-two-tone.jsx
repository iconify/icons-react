import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dh9ypi61d.css';
import '../../css/v/vw838jbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dh9ypi61d"/><path class="vw838jbqi"/></g>`,
		"fallback": "keyline-icons:map-sharp-two-tone",
	});
}

export default Component;
