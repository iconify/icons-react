import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sef_1obna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sef_1obna"/>`,
		"fallback": "solar:panels-bottom-right-outline",
	});
}

export default Component;
