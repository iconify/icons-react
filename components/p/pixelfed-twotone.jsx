import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo8cxy.css';
import '../../css/y/ydovum.css';
import '../../css/n/n6m-cw.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo8cxy ydovum"/><path class="n6m-cw ydovum"/>`,
		"fallback": "line-md:pixelfed-twotone",
	});
}

export default Component;
