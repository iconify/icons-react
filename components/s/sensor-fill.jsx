import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv51d6bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv51d6bao"/>`,
		"fallback": "ri:sensor-fill",
	});
}

export default Component;
