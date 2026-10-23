import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p7wmotbpf.css';
import '../../css/d/dy_xmpjdx.css';
import '../../css/g/gf0diyb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="p7wmotbpf"/><path class="dy_xmpjdx"/><path class="gf0diyb5q"/></g>`,
		"fallback": "matita:venus",
	});
}

export default Component;
