import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxdo5325g.css';
import '../../css/p/pyhpmlb1r.css';
import '../../css/k/k2buyulzh.css';
import '../../css/e/ei_6f8bku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxdo5325g"/><path class="pyhpmlb1r"/><path class="k2buyulzh"/><path class="ei_6f8bku"/>`,
		"fallback": "selfhst:npr",
	});
}

export default Component;
