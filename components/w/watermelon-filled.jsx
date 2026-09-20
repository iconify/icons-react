import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngng7qbgc.css';
import '../../css/d/d1fuzwb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngng7qbgc"/><path class="d1fuzwb_y"/>`,
		"fallback": "tdesign:watermelon-filled",
	});
}

export default Component;
