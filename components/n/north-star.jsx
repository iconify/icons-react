import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bhxhq0b2y.css';
import '../../css/v/v2312v13t.css';
import '../../css/a/aw20yf1ie.css';
import '../../css/p/p1usotbcl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bhxhq0b2y"/><path class="v2312v13t"/><path class="aw20yf1ie"/><path class="p1usotbcl"/></g>`,
		"fallback": "charm:north-star",
	});
}

export default Component;
