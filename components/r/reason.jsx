import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0lkapb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0lkapb7i"/>`,
		"fallback": "simple-icons:reason",
	});
}

export default Component;
