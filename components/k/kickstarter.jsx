import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8ei05v9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8ei05v9p"/>`,
		"fallback": "simple-icons:kickstarter",
	});
}

export default Component;
