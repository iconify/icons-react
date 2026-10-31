import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcer7mbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcer7mbvx"/>`,
		"fallback": "coolicons:timer-fill-round",
	});
}

export default Component;
