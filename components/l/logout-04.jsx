import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yfkp_fb7p.css';
import '../../css/s/s2wmt6buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yfkp_fb7p"/><path class="s2wmt6buj"/></g>`,
		"fallback": "hugeicons:logout-04",
	});
}

export default Component;
