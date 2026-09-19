import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yj_vhp47s.css';
import '../../css/v/vg3nyvb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="yj_vhp47s"/><path class="vg3nyvb-j"/></g>`,
		"fallback": "iconamoon:sign-factorial",
	});
}

export default Component;
