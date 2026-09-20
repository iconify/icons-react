import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx4mcabwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx4mcabwm"/>`,
		"fallback": "tabler:loader-2",
	});
}

export default Component;
