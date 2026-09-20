import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/w/whgfoj3ew.css';
import '../../css/m/mzlk3ib-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvymobzlx"/><path class="whgfoj3ew"/><path class="mzlk3ib-i"/></g>`,
		"fallback": "reicon:three-d-square",
	});
}

export default Component;
