import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhlzq_blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hhlzq_blf"/>`,
		"fallback": "griddy-icons:pause-circle",
	});
}

export default Component;
