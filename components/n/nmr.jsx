import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/j/j49yvvine.css';
import '../../css/o/og4ylxbsv.css';
import '../../css/y/y72c0qhnk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vkcj4bcdm"/><path class="j49yvvine"/><path class="og4ylxbsv"/><path class="y72c0qhnk"/></g>`,
		"fallback": "icon-park-outline:nmr",
	});
}

export default Component;
