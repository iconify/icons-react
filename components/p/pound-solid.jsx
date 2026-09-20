import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h15ryn7dx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h15ryn7dx"/>`,
		"fallback": "teenyicons:pound-solid",
	});
}

export default Component;
