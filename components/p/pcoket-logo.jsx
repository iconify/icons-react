import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j5235tb5v.css';
import '../../css/m/mmmzb9-dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j5235tb5v"/><path class="mmmzb9-dt"/></g>`,
		"fallback": "streamline-ultimate:pcoket-logo",
	});
}

export default Component;
