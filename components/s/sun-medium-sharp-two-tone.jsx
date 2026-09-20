import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/gv2jrdtmw.css';
import '../../css/x/xoy3_wr4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="gv2jrdtmw"/><path class="xoy3_wr4r"/></g>`,
		"fallback": "keyline-icons:sun-medium-sharp-two-tone",
	});
}

export default Component;
