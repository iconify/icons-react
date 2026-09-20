import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v8hgvi38z.css';
import '../../css/l/leta_t4mj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v8hgvi38z"/><path class="leta_t4mj"/></g>`,
		"fallback": "keyline-icons:square-arrow-up-sharp-duotone",
	});
}

export default Component;
