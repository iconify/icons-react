import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahhv7fb5e.css';

const viewBox = {"width":1130,"height":178};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahhv7fb5e"/>`,
		"fallback": "thesvg-color:mercadona",
	});
}

export default Component;
