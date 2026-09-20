import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouaapzbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouaapzbuk"/>`,
		"fallback": "keyline-icons:panel-right-sharp-fill",
	});
}

export default Component;
