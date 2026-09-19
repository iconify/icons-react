import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agal7ibzs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agal7ibzs"/>`,
		"fallback": "fa7-brands:intercom",
	});
}

export default Component;
