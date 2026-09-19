import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/damz3ibbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="damz3ibbo"/>`,
		"fallback": "basil:vk-solid",
	});
}

export default Component;
