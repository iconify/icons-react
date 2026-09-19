import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vswvcjbcf.css';
import '../../css/a/a3l_nih8k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="vswvcjbcf"/><path class="a3l_nih8k"/></g>`,
		"fallback": "charm:monitor",
	});
}

export default Component;
