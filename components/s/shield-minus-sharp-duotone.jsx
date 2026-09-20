import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fvd42ib4r.css';
import '../../css/o/of52wgbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fvd42ib4r"/><path class="of52wgbuj"/></g>`,
		"fallback": "keyline-icons:shield-minus-sharp-duotone",
	});
}

export default Component;
