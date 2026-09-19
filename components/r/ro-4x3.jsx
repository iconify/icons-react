import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/a/ajlllcbua.css';
import '../../css/j/jxty_9oem.css';
import '../../css/i/iaaudwpwy.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="ajlllcbua"/><path class="jxty_9oem"/><path class="iaaudwpwy"/></g>`,
		"fallback": "flag:ro-4x3",
	});
}

export default Component;
