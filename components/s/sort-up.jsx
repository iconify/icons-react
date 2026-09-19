import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_a2ab8ms.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_a2ab8ms"/>`,
		"fallback": "fa7-solid:sort-up",
	});
}

export default Component;
