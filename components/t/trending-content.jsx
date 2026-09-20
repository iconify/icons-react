import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys5xo3bgx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys5xo3bgx"/>`,
		"fallback": "streamline:trending-content",
	});
}

export default Component;
