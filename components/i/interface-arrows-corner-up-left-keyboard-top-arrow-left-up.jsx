import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmw-1gb3e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmw-1gb3e"/>`,
		"fallback": "streamline:interface-arrows-corner-up-left-keyboard-top-arrow-left-up",
	});
}

export default Component;
