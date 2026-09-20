import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2cwerb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2cwerb7p"/>`,
		"fallback": "simple-icons:qwen",
	});
}

export default Component;
