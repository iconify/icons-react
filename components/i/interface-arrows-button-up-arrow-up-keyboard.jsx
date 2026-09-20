import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emac03b6s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emac03b6s"/>`,
		"fallback": "streamline:interface-arrows-button-up-arrow-up-keyboard",
	});
}

export default Component;
