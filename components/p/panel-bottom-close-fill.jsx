import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otra1mb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otra1mb_o"/>`,
		"fallback": "keyline-icons:panel-bottom-close-fill",
	});
}

export default Component;
