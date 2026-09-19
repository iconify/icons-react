import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw_v8cb9w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw_v8cb9w"/>`,
		"fallback": "devicon-plain:ktor",
	});
}

export default Component;
