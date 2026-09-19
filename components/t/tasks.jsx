import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk_cmob9x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk_cmob9x"/>`,
		"fallback": "icons8:tasks",
	});
}

export default Component;
