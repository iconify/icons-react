import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaebqy2hx.css';

const viewBox = {"width":192,"height":175};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaebqy2hx"/>`,
		"fallback": "thesvg-color:vlt-light",
	});
}

export default Component;
