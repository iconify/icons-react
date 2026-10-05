import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/dsos9butg.css';
import '../../css/y/yksksbbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="dsos9butg"/><path class="yksksbbsh"/></g>`,
		"fallback": "matita:smartphone",
	});
}

export default Component;
