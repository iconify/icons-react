import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekcwtkbkp.css';

const viewBox = {"width":1026,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekcwtkbkp"/>`,
		"fallback": "whh:medalsilver",
	});
}

export default Component;
