import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwk_e0oiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwk_e0oiu"/>`,
		"fallback": "iconaut:sun-moon-solid",
	});
}

export default Component;
