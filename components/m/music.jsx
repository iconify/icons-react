import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f19_pj4xf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f19_pj4xf"/>`,
		"fallback": "icomoon-free:music",
	});
}

export default Component;
