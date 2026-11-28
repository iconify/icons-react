import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnjedac9w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jceh016qq.css';
import '../../css/m/mvc1e_bil.css';
import '../../css/p/p7iqdlb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnjedac9w secondary"/><g class="dt0cm9dhy primary"><path class="jceh016qq"/><path class="mvc1e_bil"/><path class="p7iqdlb2g"/></g>`,
		"fallback": "iconaut:store-duo",
	});
}

export default Component;
