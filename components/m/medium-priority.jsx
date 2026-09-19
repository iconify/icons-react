import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkky_yb9z.css';
import '../../css/b/bvkc79bpm.css';
import '../../css/b/bwdpl5zyw.css';
import '../../css/m/mdaedzcsu.css';
import '../../css/p/p0vj0xbgc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkky_yb9z"/><g class="bvkc79bpm"><circle class="bwdpl5zyw"/><circle class="mdaedzcsu"/><circle class="p0vj0xbgc"/></g>`,
		"fallback": "flat-color-icons:medium-priority",
	});
}

export default Component;
