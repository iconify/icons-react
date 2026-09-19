import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6kk2jbkn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6kk2jbkn"/>`,
		"fallback": "f7:trash-circle",
	});
}

export default Component;
