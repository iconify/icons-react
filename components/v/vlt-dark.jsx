import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok9hfbanf.css';

const viewBox = {"width":192,"height":175};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok9hfbanf"/>`,
		"fallback": "thesvg-color:vlt-dark",
	});
}

export default Component;
