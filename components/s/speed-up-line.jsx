import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4v_z4_rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4v_z4_rj"/>`,
		"fallback": "ri:speed-up-line",
	});
}

export default Component;
