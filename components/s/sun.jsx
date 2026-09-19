import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7bk_fbje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7bk_fbje"/>`,
		"fallback": "icomoon-free:sun",
	});
}

export default Component;
