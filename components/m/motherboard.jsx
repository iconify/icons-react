import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dtcuvh7uw.css';
import '../../css/c/cd3dg_wtk.css';
import '../../css/v/vv0u9-ufy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="dtcuvh7uw"/><path class="cd3dg_wtk"/><rect class="vv0u9-ufy"/></g>`,
		"fallback": "proicons:motherboard",
	});
}

export default Component;
