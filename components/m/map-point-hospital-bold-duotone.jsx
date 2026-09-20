import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fl2tnb5ah.css';
import '../../css/s/sxf1vrb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fl2tnb5ah"/><path class="sxf1vrb2m"/></g>`,
		"fallback": "solar:map-point-hospital-bold-duotone",
	});
}

export default Component;
