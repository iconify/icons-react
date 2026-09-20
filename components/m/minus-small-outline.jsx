import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe8a6zxhy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe8a6zxhy"/>`,
		"fallback": "teenyicons:minus-small-outline",
	});
}

export default Component;
