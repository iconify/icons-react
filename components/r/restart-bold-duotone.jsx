import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydoht-zhu.css';
import '../../css/v/v3c_7qboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydoht-zhu"/><path class="v3c_7qboy"/>`,
		"fallback": "solar:restart-bold-duotone",
	});
}

export default Component;
