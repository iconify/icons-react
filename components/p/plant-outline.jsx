import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc3muq5bp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc3muq5bp"/>`,
		"fallback": "teenyicons:plant-outline",
	});
}

export default Component;
