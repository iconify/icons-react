import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t713a371d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t713a371d"/>`,
		"fallback": "lucide:messages-circle",
	});
}

export default Component;
