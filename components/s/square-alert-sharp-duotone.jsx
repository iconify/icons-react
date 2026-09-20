import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v8hgvi38z.css';
import '../../css/l/lju5ynbhb.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v8hgvi38z"/><path class="lju5ynbhb"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:square-alert-sharp-duotone",
	});
}

export default Component;
