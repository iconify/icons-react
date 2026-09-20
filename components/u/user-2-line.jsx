import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo7oplb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo7oplb2o"/>`,
		"fallback": "ri:user-2-line",
	});
}

export default Component;
