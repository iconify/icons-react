import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjnb0cb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjnb0cb7v"/>`,
		"fallback": "vadivam:pointer-off",
	});
}

export default Component;
