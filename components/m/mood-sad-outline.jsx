import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtt0f29xf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtt0f29xf"/>`,
		"fallback": "teenyicons:mood-sad-outline",
	});
}

export default Component;
