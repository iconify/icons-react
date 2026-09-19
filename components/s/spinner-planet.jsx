import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eelx_9v_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eelx_9v_a"/>`,
		"fallback": "humbleicons:spinner-planet",
	});
}

export default Component;
