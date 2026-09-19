import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikcfa0bbx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikcfa0bbx"/>`,
		"fallback": "bi:pin-fill",
	});
}

export default Component;
