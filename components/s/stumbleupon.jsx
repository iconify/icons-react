import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t602nu8bz.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t602nu8bz"/>`,
		"fallback": "el:stumbleupon",
	});
}

export default Component;
