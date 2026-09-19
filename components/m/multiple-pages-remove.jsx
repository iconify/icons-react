import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zd8q09i1h.css';
import '../../css/d/d85ks6bxl.css';
import '../../css/n/nje5g0bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zd8q09i1h"/><path class="d85ks6bxl"/><path class="nje5g0bbx"/></g>`,
		"fallback": "iconoir:multiple-pages-remove",
	});
}

export default Component;
