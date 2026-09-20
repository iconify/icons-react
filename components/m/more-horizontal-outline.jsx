import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-nldbc4k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-nldbc4k"/>`,
		"fallback": "teenyicons:more-horizontal-outline",
	});
}

export default Component;
