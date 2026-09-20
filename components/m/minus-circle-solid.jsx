import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i68vwmyrc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i68vwmyrc"/>`,
		"fallback": "teenyicons:minus-circle-solid",
	});
}

export default Component;
