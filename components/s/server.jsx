import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yen9g7bht.css';
import '../../css/m/mlcd-5bnp.css';
import '../../css/t/tekp_ab_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yen9g7bht"/><path class="mlcd-5bnp"/><path class="tekp_ab_r"/></g>`,
		"fallback": "matita:server",
	});
}

export default Component;
