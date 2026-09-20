import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq0gmnb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq0gmnb1s"/>`,
		"fallback": "keyline-icons:paintbrush-sharp-fill",
	});
}

export default Component;
