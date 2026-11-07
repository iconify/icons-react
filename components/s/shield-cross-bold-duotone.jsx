import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoqk-f2dc.css';
import '../../css/a/a-tw93bhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoqk-f2dc"/><path class="a-tw93bhx"/>`,
		"fallback": "solar:shield-cross-bold-duotone",
	});
}

export default Component;
