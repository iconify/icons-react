import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjl7gynas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjl7gynas"/>`,
		"fallback": "heroicons-outline:radio",
	});
}

export default Component;
