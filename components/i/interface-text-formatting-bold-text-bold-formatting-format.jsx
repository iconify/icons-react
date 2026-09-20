import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpadxjbjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpadxjbjh"/>`,
		"fallback": "streamline:interface-text-formatting-bold-text-bold-formatting-format",
	});
}

export default Component;
