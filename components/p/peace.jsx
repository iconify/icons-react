import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn2kzkb-v.css';
import '../../css/n/ntpo6523f.css';
import '../../css/z/z4ynvm7it.css';
import '../../css/a/aqu_-tb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cn2kzkb-v"/><path class="ntpo6523f"/><path class="z4ynvm7it"/><path class="aqu_-tb0j"/></g>`,
		"fallback": "streamline-cyber-color:peace",
	});
}

export default Component;
