import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd4b8lu0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd4b8lu0z"/>`,
		"fallback": "vadivam:pin-off",
	});
}

export default Component;
