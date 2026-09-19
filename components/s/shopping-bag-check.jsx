import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xdz57h50f.css';
import '../../css/z/zkos_fzvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xdz57h50f"/><path class="zkos_fzvv"/></g>`,
		"fallback": "iconoir:shopping-bag-check",
	});
}

export default Component;
