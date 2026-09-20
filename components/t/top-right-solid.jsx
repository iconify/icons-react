import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh8cl0c0h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jh8cl0c0h"/>`,
		"fallback": "teenyicons:top-right-solid",
	});
}

export default Component;
