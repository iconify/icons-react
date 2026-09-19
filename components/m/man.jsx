import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4klw5k7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4klw5k7r"/>`,
		"fallback": "icomoon-free:man",
	});
}

export default Component;
