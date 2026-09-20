import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v29dpw61b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v29dpw61b"/>`,
		"fallback": "tdesign:numbers-7",
	});
}

export default Component;
