import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giqgrriek.css';
import '../../css/e/ec7vxwnky.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giqgrriek"/><path class="ec7vxwnky"/>`,
		"fallback": "lineicons:refresh-dollar-1",
	});
}

export default Component;
