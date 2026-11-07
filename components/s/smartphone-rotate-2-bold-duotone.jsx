import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mytqe3brx.css';
import '../../css/q/q4cd927lm.css';
import '../../css/e/e3ailubbm.css';
import '../../css/g/g_c-r1l6i.css';
import '../../css/i/ijj9ljbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mytqe3brx"/><path class="q4cd927lm"/><path class="e3ailubbm"/><path class="g_c-r1l6i"/><path class="ijj9ljbbz"/>`,
		"fallback": "solar:smartphone-rotate-2-bold-duotone",
	});
}

export default Component;
