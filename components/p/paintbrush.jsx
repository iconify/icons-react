import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ya_u4acbg.css';
import '../../css/z/ze-ddynnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ya_u4acbg"/><path class="ze-ddynnn"/></g>`,
		"fallback": "reicon:paintbrush",
	});
}

export default Component;
