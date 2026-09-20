import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvv4397cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvv4397cn"/>`,
		"fallback": "keyline-icons:paintbrush-sharp",
	});
}

export default Component;
