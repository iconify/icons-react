import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avqaorbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avqaorbxx"/>`,
		"fallback": "griddy-icons:rows-four",
	});
}

export default Component;
