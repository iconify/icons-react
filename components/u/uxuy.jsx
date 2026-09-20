import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ojn79wy9w.css';
import '../../css/z/zy9imda8d.css';
import '../../css/b/b_nkvm26v.css';
import '../../css/b/b_r0u5tbo.css';

const viewBox = {"width":655,"height":264};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ojn79wy9w"/><path class="zy9imda8d"/><path class="b_nkvm26v"/><path class="b_r0u5tbo"/></g>`,
		"fallback": "thesvg-color:uxuy",
	});
}

export default Component;
