import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-33o2bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-33o2bhn"/>`,
		"fallback": "proicons:timer-off",
	});
}

export default Component;
