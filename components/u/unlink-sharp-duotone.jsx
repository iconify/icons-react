import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cg2f0-yqp.css';
import '../../css/j/jjuxqtb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cg2f0-yqp"/><path class="jjuxqtb2h"/></g>`,
		"fallback": "keyline-icons:unlink-sharp-duotone",
	});
}

export default Component;
