import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvd-rhbfq.css';
import '../../css/y/yb7vanbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kvd-rhbfq"/><path class="yb7vanbkx"/></g>`,
		"fallback": "tdesign:pear",
	});
}

export default Component;
