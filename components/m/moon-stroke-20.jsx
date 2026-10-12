import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf5r4xb1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf5r4xb1f"/>`,
		"fallback": "garden:moon-stroke-20",
	});
}

export default Component;
