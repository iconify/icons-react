import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wdr8q5b-s.css';
import '../../css/o/o0pzwbj7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wdr8q5b-s"/><path class="o0pzwbj7f"/></g>`,
		"fallback": "hugeicons:password-validation",
	});
}

export default Component;
