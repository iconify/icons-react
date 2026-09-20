import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tch1x7qyd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tch1x7qyd"/>`,
		"fallback": "streamline:interface-arrows-button-left-arrow-keyboard-left",
	});
}

export default Component;
