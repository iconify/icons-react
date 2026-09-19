import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bhxhq0b2y.css';
import '../../css/v/v2312v13t.css';
import '../../css/y/yv9gp_-qb.css';
import '../../css/z/zjv8k6bjv.css';
import '../../css/i/iyq2b1r0h.css';
import '../../css/p/pul2813qb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bhxhq0b2y"/><path class="v2312v13t"/><path class="yv9gp_-qb"/><path class="zjv8k6bjv"/><path class="iyq2b1r0h"/><path class="pul2813qb"/></g>`,
		"fallback": "charm:snowflake",
	});
}

export default Component;
