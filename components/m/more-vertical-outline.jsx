import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwapf4b9u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwapf4b9u"/>`,
		"fallback": "teenyicons:more-vertical-outline",
	});
}

export default Component;
