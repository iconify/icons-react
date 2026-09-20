import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bs0tjfbcq.css';
import '../../css/r/rgxk9p1eb.css';
import '../../css/s/spt4_bc5z.css';
import '../../css/b/bin6o3y-j.css';
import '../../css/c/cr51c0lxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bs0tjfbcq"/><path class="rgxk9p1eb"/><path class="spt4_bc5z"/><path class="bin6o3y-j"/><path class="cr51c0lxq"/></g>`,
		"fallback": "solar:remote-controller-2-outline",
	});
}

export default Component;
