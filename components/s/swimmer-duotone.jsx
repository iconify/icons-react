import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paykg7zgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="paykg7zgg primary"/>`,
		"fallback": "iconaut:swimmer-duotone",
	});
}

export default Component;
