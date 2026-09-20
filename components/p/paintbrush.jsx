import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j8185sbtm.css';
import '../../css/z/ze-ddynnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j8185sbtm"/><path class="ze-ddynnn"/></g>`,
		"fallback": "reicon:paintbrush",
	});
}

export default Component;
