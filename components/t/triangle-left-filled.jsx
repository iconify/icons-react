import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7zrjaq9d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7zrjaq9d"/>`,
		"fallback": "pepicons:triangle-left-filled",
	});
}

export default Component;
