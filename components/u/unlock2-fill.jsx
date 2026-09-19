import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djo92_bmp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djo92_bmp"/>`,
		"fallback": "bi:unlock2-fill",
	});
}

export default Component;
