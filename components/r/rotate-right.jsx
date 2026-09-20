import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yt9vd5bml.css';
import '../../css/i/ilvn456zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="yt9vd5bml"/><path vector-effect="non-scaling-stroke" class="ilvn456zn"/></g>`,
		"fallback": "wordpress:rotate-right",
	});
}

export default Component;
