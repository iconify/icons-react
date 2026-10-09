import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6bo5g7fy.css';
import '../../css/p/p0blm-arr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6bo5g7fy"/><path class="p0blm-arr"/>`,
		"fallback": "energy-icons:jar-48",
	});
}

export default Component;
