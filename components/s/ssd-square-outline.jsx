import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fl4-lpu1e.css';
import '../../css/b/b0755-jfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fl4-lpu1e"/><path class="b0755-jfs"/></g>`,
		"fallback": "solar:ssd-square-outline",
	});
}

export default Component;
