import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tibruob8z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tibruob8z"/>`,
		"fallback": "teenyicons:moon-solid",
	});
}

export default Component;
