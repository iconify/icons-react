import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vugj7860w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vugj7860w"/>`,
		"fallback": "lsicon:picture-off-outline",
	});
}

export default Component;
