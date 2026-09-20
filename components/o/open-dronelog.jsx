import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym6wy1brw.css';
import '../../css/g/gtz84wbsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym6wy1brw"/><path class="gtz84wbsv"/>`,
		"fallback": "selfhst:open-dronelog",
	});
}

export default Component;
