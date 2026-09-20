import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz_qq2r_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz_qq2r_e"/>`,
		"fallback": "lucide:square-arrow-out-up-left",
	});
}

export default Component;
