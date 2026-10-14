import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/iaqy45beb.css';
import '../../css/z/zhck8bc9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="iaqy45beb"/><path class="zhck8bc9f"/></g>`,
		"fallback": "matita:square-check",
	});
}

export default Component;
