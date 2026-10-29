import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkwaezb_n.css';
import '../../css/o/oj7j_1bgn.css';
import '../../css/s/ss3h7jkmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkwaezb_n wm-shadow"/><path class="oj7j_1bgn wm-k"/><path class="ss3h7jkmy wm-k"/>`,
		"fallback": "withicons-pastel:rotate-cw",
	});
}

export default Component;
