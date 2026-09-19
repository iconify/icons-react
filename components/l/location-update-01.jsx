import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cfxgltjsz.css';
import '../../css/f/f8rwt8bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cfxgltjsz"/><path class="f8rwt8bcu"/></g>`,
		"fallback": "hugeicons:location-update-01",
	});
}

export default Component;
