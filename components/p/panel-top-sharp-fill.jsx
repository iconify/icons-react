import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p55d2obfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p55d2obfz"/>`,
		"fallback": "keyline-icons:panel-top-sharp-fill",
	});
}

export default Component;
