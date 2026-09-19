import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emloct5vx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emloct5vx"/>`,
		"fallback": "dashicons:layout",
	});
}

export default Component;
