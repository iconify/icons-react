import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9s0gpb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9s0gpb5i"/>`,
		"fallback": "qlementine-icons:skip-forward-24",
	});
}

export default Component;
