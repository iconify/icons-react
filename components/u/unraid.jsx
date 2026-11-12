import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu0u3lhjj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu0u3lhjj"/>`,
		"fallback": "devicon-plain:unraid",
	});
}

export default Component;
