import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdkry4kfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdkry4kfs"/>`,
		"fallback": "mdi:numeric-5-circle",
	});
}

export default Component;
