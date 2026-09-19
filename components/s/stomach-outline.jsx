import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7i8_6bks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7i8_6bks"/>`,
		"fallback": "healthicons:stomach-outline",
	});
}

export default Component;
