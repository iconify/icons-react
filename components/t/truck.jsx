import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvarxe4oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvarxe4oq"/>`,
		"fallback": "griddy-icons:truck",
	});
}

export default Component;
