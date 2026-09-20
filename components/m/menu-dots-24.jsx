import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1mk5dhbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1mk5dhbx"/>`,
		"fallback": "qlementine-icons:menu-dots-24",
	});
}

export default Component;
