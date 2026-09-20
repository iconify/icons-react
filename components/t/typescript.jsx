import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yf5ivcc2o.css';
import '../../css/h/hic78ybwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="yf5ivcc2o"/><path class="hic78ybwi"/></g>`,
		"fallback": "proicons:typescript",
	});
}

export default Component;
