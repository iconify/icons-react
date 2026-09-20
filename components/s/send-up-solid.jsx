import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1giy57js.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j1giy57js"/>`,
		"fallback": "teenyicons:send-up-solid",
	});
}

export default Component;
