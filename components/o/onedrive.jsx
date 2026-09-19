import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0czi8bpx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0czi8bpx"/>`,
		"fallback": "icomoon-free:onedrive",
	});
}

export default Component;
