import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ark3b70lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ark3b70lo"/>`,
		"fallback": "simple-icons:tresorit",
	});
}

export default Component;
