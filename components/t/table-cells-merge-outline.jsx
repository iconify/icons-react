import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd9a8-uca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rd9a8-uca"/>`,
		"fallback": "solar:table-cells-merge-outline",
	});
}

export default Component;
