import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3l8a-bdg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3l8a-bdg"/>`,
		"fallback": "teenyicons:ms-word-outline",
	});
}

export default Component;
