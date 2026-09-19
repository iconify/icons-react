import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag5e9zx_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag5e9zx_f"/>`,
		"fallback": "garden:pencil-fill-16",
	});
}

export default Component;
