import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dr2cjhjmr.css';
import '../../css/o/o0m1gzsmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dr2cjhjmr"/><path class="o0m1gzsmz"/></g>`,
		"fallback": "reicon:ram2",
	});
}

export default Component;
