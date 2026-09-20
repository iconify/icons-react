import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu9tf2bey.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu9tf2bey"/>`,
		"fallback": "streamline:interface-text-formatting-text-text-options-formatting-format-color",
	});
}

export default Component;
