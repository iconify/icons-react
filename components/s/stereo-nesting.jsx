import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o5_elsb4l.css';
import '../../css/p/p-z9cxucp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o5_elsb4l"/><path class="p-z9cxucp"/></g>`,
		"fallback": "icon-park-outline:stereo-nesting",
	});
}

export default Component;
