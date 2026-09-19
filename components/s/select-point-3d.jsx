import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cmb79xb_o.css';
import '../../css/k/kpsn8jbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cmb79xb_o"/><path class="kpsn8jbjf"/></g>`,
		"fallback": "iconoir:select-point-3d",
	});
}

export default Component;
