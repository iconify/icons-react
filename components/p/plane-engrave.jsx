import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j0ghh_c0v.css';
import '../../css/m/ml0wobb6r.css';
import '../../css/t/tygsh6hqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j0ghh_c0v"/><path class="ml0wobb6r wm-shadow"/><path class="tygsh6hqg"/></g>`,
		"fallback": "withicons:plane-engrave",
	});
}

export default Component;
