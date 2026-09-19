import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_40xtlgh.css';
import '../../css/w/w3u6i5b1c.css';
import '../../css/g/go5s9wb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y_40xtlgh"/><path class="w3u6i5b1c"/><path class="go5s9wb5p"/></g>`,
		"fallback": "hugeicons:quora",
	});
}

export default Component;
