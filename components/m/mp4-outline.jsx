import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t39a96wvf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t39a96wvf"/>`,
		"fallback": "teenyicons:mp4-outline",
	});
}

export default Component;
