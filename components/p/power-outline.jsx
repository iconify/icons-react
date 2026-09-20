import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6i9_yb3d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6i9_yb3d"/>`,
		"fallback": "teenyicons:power-outline",
	});
}

export default Component;
