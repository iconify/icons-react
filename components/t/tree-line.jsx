import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk4nvcbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk4nvcbif"/>`,
		"fallback": "ri:tree-line",
	});
}

export default Component;
