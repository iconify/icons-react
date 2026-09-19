import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x3u-s_b7m.css';
import '../../css/d/dafffct5z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x3u-s_b7m"/><path class="dafffct5z"/></g>`,
		"fallback": "foundation:social-blogger",
	});
}

export default Component;
