import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dr2cjhjmr.css';
import '../../css/h/h890i6q9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dr2cjhjmr"/><path class="h890i6q9u"/></g>`,
		"fallback": "reicon:ram",
	});
}

export default Component;
