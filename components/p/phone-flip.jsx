import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czpu7acvy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czpu7acvy"/>`,
		"fallback": "fa7-solid:phone-flip",
	});
}

export default Component;
