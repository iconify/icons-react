import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzduhczjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzduhczjh"/>`,
		"fallback": "thesvg-color:primeng",
	});
}

export default Component;
