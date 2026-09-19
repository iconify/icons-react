import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp7ixobut.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp7ixobut"/>`,
		"fallback": "f7:number",
	});
}

export default Component;
