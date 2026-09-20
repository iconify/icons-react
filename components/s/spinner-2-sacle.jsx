import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h43-4kifw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h43-4kifw"/>`,
		"fallback": "lineicons:spinner-2-sacle",
	});
}

export default Component;
