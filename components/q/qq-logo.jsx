import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/on0uy8i1s.css';
import '../../css/r/ry1_soj-o.css';
import '../../css/h/h1kjssb6d.css';
import '../../css/p/pybetgb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="on0uy8i1s"/><path class="ry1_soj-o"/><path class="h1kjssb6d"/><path class="pybetgb2q"/></g>`,
		"fallback": "streamline-logos:qq-logo",
	});
}

export default Component;
