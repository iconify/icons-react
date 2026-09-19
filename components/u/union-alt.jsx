import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eo_f7tb3e.css';
import '../../css/m/mkt4fx3jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eo_f7tb3e"/><path class="mkt4fx3jb"/></g>`,
		"fallback": "iconoir:union-alt",
	});
}

export default Component;
