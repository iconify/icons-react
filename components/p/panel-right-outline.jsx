import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjz7_5-6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjz7_5-6d"/>`,
		"fallback": "solar:panel-right-outline",
	});
}

export default Component;
