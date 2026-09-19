import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foj31zuzx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foj31zuzx"/>`,
		"fallback": "fa7-solid:v",
	});
}

export default Component;
