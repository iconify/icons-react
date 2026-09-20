import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/azr-0u.css';
import '../../css/l/li54_l.css';
import '../../css/s/s0k_kc.css';
import '../../css/k/kr24cs.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c azr-0u"/><path class="a0m25c li54_l"/><path class="a0m25c s0k_kc"/><path class="a0m25c kr24cs"/>`,
		"fallback": "line-md:medical-services",
	});
}

export default Component;
