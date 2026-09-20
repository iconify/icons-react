import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opupg0b4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opupg0b4e"/>`,
		"fallback": "streamline:interface-add-2-remove-bold-cross-buttons-button-add-plus",
	});
}

export default Component;
