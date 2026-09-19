import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvos9e42d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yvos9e42d"/>`,
		"fallback": "griddy-icons:log-in",
	});
}

export default Component;
