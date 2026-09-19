import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty380eb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty380eb5m"/>`,
		"fallback": "heroicons:scale",
	});
}

export default Component;
