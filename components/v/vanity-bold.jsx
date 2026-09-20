import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i3uoprbyd.css';
import '../../css/v/v_ycjhbsq.css';
import '../../css/e/ev6o6pb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i3uoprbyd"/><path class="v_ycjhbsq"/><path class="ev6o6pb9v"/></g>`,
		"fallback": "solar:vanity-bold",
	});
}

export default Component;
