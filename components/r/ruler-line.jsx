import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dttdt_m9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dttdt_m9w"/>`,
		"fallback": "ri:ruler-line",
	});
}

export default Component;
