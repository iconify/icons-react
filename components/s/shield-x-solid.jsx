import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0jgelb3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e0jgelb3z"/>`,
		"fallback": "teenyicons:shield-x-solid",
	});
}

export default Component;
