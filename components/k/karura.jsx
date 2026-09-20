import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbdndxbzu.css';
import '../../css/h/h892u3ajl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbdndxbzu"/><path class="h892u3ajl"/>`,
		"fallback": "token:karura",
	});
}

export default Component;
