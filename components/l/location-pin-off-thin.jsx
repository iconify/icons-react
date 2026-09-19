import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/oc0vi5bvd.css';
import '../../css/y/y-h7hdc4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="oc0vi5bvd"/><path class="y-h7hdc4i"/></g>`,
		"fallback": "iconamoon:location-pin-off-thin",
	});
}

export default Component;
