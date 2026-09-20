import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql8p6zoco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql8p6zoco"/>`,
		"fallback": "tabler:layout-navbar-collapse-filled",
	});
}

export default Component;
