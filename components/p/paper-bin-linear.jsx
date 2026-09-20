import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdzf0cccf.css';
import '../../css/x/xfcsm6b8b.css';
import '../../css/b/bbj_fcggl.css';
import '../../css/d/d8xq11pqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sdzf0cccf"/><path class="xfcsm6b8b"/><path class="bbj_fcggl"/><path class="d8xq11pqp"/></g>`,
		"fallback": "solar:paper-bin-linear",
	});
}

export default Component;
