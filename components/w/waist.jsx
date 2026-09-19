import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s1w0zeb-q.css';
import '../../css/c/cygklwmuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s1w0zeb-q"/><path class="cygklwmuy"/></g>`,
		"fallback": "iconoir:waist",
	});
}

export default Component;
