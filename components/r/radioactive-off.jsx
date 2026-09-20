import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm8s9bcod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm8s9bcod"/>`,
		"fallback": "mdi:radioactive-off",
	});
}

export default Component;
