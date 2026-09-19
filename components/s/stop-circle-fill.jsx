import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u27b7vd_i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u27b7vd_i"/>`,
		"fallback": "f7:stop-circle-fill",
	});
}

export default Component;
