import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfi_pwizc.css';
import '../../css/t/tc8lqywfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfi_pwizc"/><path class="tc8lqywfy"/>`,
		"fallback": "solar:planet-bold",
	});
}

export default Component;
