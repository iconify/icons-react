import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vguxmzbfq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vguxmzbfq"/>`,
		"fallback": "memory:menu-left-fill",
	});
}

export default Component;
