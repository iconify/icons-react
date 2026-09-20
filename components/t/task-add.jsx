import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj8i9n62v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj8i9n62v"/>`,
		"fallback": "tdesign:task-add",
	});
}

export default Component;
