import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snw4uebvo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snw4uebvo"/>`,
		"fallback": "heroicons-solid:switch-horizontal",
	});
}

export default Component;
