import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0x17vb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0x17vb9m"/>`,
		"fallback": "ri:newspaper-fill",
	});
}

export default Component;
