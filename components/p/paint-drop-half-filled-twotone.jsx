import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4lbmm.css';
import '../../css/y/ydovum.css';
import '../../css/t/tzu-tt.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4lbmm ydovum"/><path class="tzu-tt ydovum"/>`,
		"fallback": "line-md:paint-drop-half-filled-twotone",
	});
}

export default Component;
