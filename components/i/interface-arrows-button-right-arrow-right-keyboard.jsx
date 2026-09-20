import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee5hpnb7w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee5hpnb7w"/>`,
		"fallback": "streamline:interface-arrows-button-right-arrow-right-keyboard",
	});
}

export default Component;
