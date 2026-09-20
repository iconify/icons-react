import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hott3ac_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hott3ac_w"/>`,
		"fallback": "ri:meta-line",
	});
}

export default Component;
