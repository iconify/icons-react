import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0m-cfizf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0m-cfizf"/>`,
		"fallback": "keyline-icons:panel-bottom-dashed",
	});
}

export default Component;
