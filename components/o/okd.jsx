import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu_x1-bzu.css';
import '../../css/y/ys_vvx_-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu_x1-bzu"/><path class="ys_vvx_-d"/>`,
		"fallback": "selfhst:okd",
	});
}

export default Component;
