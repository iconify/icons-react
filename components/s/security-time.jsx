import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3-6cmb1n.css';
import '../../css/r/r_7aq8m-i.css';
import '../../css/r/r0wv4tb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q3-6cmb1n"/><path class="r_7aq8m-i"/><path class="r0wv4tb5t"/></g>`,
		"fallback": "reicon:security-time",
	});
}

export default Component;
