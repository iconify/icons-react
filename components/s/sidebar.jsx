import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ctfm4yb2w.css';
import '../../css/y/yhrns5byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="ctfm4yb2w"/><path vector-effect="non-scaling-stroke" class="yhrns5byl"/></g>`,
		"fallback": "wordpress:sidebar",
	});
}

export default Component;
