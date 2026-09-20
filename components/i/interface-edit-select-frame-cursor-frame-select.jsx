import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnz5lbemc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnz5lbemc"/>`,
		"fallback": "streamline:interface-edit-select-frame-cursor-frame-select",
	});
}

export default Component;
