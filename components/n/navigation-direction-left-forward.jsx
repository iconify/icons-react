import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/j/j3v39jmcl.css';
import '../../css/e/ezazlrbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="j3v39jmcl"/><path class="ezazlrbau"/></g>`,
		"fallback": "streamline-ultimate:navigation-direction-left-forward",
	});
}

export default Component;
