import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k66dz5bmp.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k66dz5bmp"/>`,
		"fallback": "whh:squarefive",
	});
}

export default Component;
