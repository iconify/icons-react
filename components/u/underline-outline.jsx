import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ausc4-b5y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ausc4-b5y"/>`,
		"fallback": "teenyicons:underline-outline",
	});
}

export default Component;
