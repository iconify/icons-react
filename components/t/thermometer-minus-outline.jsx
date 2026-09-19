import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqy0_y_xf.css';
import '../../css/f/fbx8fkb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="qqy0_y_xf"/><path class="fbx8fkb6d"/>`,
		"fallback": "eva:thermometer-minus-outline",
	});
}

export default Component;
