import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbovjhb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbovjhb8e"/>`,
		"fallback": "ri:polaroid-line",
	});
}

export default Component;
