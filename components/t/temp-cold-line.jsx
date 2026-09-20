import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-2su8v_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-2su8v_x"/>`,
		"fallback": "ri:temp-cold-line",
	});
}

export default Component;
