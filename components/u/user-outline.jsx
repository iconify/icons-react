import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3_5tnbqx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f3_5tnbqx"/>`,
		"fallback": "teenyicons:user-outline",
	});
}

export default Component;
