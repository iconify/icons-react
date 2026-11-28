import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z7zs_wb6f.css';
import '../../css/a/au-jcou0p.css';
import '../../css/y/y6gcu_9pf.css';
import '../../css/y/yktyznqdj.css';
import '../../css/p/py49z5b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z7zs_wb6f"/><path class="au-jcou0p"/><path class="y6gcu_9pf"/><path class="yktyznqdj"/><path class="py49z5b4j"/></g>`,
		"fallback": "iconaut:road",
	});
}

export default Component;
