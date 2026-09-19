import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca5_jfd3t.css';

const viewBox = {"width":528,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca5_jfd3t"/>`,
		"fallback": "ps:resize",
	});
}

export default Component;
