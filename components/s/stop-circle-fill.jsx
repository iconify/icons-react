import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_uvs0b3z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_uvs0b3z"/>`,
		"fallback": "bi:stop-circle-fill",
	});
}

export default Component;
