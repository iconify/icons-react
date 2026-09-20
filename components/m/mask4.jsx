import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vctln8bwu.css';
import '../../css/z/zomfrgb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vctln8bwu"/><path class="zomfrgb_j"/></g>`,
		"fallback": "reicon:mask4",
	});
}

export default Component;
