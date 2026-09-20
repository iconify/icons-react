import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb4dekbxd.css';
import '../../css/r/rq3rv_bun.css';
import '../../css/k/k3szck9dr.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb4dekbxd"/><path class="rq3rv_bun"/><path class="k3szck9dr"/>`,
		"fallback": "thesvg-color:warp",
	});
}

export default Component;
