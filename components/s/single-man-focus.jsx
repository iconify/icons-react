import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x_64fgtwp.css';
import '../../css/y/yzegfvbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x_64fgtwp"/><path class="yzegfvbyt"/></g>`,
		"fallback": "streamline-ultimate:single-man-focus",
	});
}

export default Component;
