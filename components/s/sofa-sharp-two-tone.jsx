import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r2jxn3bxo.css';
import '../../css/q/qw9o_hbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r2jxn3bxo"/><path class="qw9o_hbth"/></g>`,
		"fallback": "keyline-icons:sofa-sharp-two-tone",
	});
}

export default Component;
