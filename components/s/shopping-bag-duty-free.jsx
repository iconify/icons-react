import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/th-j5ed0o.css';
import '../../css/x/x2yuxabkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="th-j5ed0o"/><path class="x2yuxabkk"/></g>`,
		"fallback": "streamline-ultimate:shopping-bag-duty-free",
	});
}

export default Component;
