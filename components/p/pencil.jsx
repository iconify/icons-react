import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-a6bebvj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-a6bebvj"/>`,
		"fallback": "icons8:pencil",
	});
}

export default Component;
