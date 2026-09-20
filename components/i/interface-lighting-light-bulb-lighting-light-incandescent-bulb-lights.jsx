import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9anvvtig.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9anvvtig"/>`,
		"fallback": "streamline:interface-lighting-light-bulb-lighting-light-incandescent-bulb-lights",
	});
}

export default Component;
