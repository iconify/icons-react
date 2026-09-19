import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9--lib2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9--lib2i"/>`,
		"fallback": "hugeicons:nike",
	});
}

export default Component;
