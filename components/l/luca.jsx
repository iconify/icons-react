import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p92uzhv3v.css';
import '../../css/v/v_hbntbgs.css';
import '../../css/z/zmts5cclx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p92uzhv3v"/><path class="v_hbntbgs"/><path clip-rule="evenodd" class="zmts5cclx"/>`,
		"fallback": "token:luca",
	});
}

export default Component;
