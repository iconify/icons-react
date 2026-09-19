import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xx42ebb4r.css';
import '../../css/n/nuox9jb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xx42ebb4r"/><path class="nuox9jb_m"/></g>`,
		"fallback": "iconoir:unity-5",
	});
}

export default Component;
