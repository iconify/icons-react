import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs99ztb-t.css';
import '../../css/m/mcbwykhxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs99ztb-t"/><path class="mcbwykhxe"/>`,
		"fallback": "fontisto:plane-ticket",
	});
}

export default Component;
